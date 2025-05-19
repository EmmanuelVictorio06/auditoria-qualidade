const inquirer = require('inquirer');
const fs = require('fs');

const checklist = JSON.parse(fs.readFileSync('./checklist.json'));
let respostas = [];
let ncs = [];

(async () => {
  console.log('\n📋 Iniciando Auditoria\n');

  for (let item of checklist) {
    const { resposta } = await inquirer.prompt({
      type: 'list',
      name: 'resposta',
      message: item.pergunta,
      choices: ['SIM', 'NÃO', 'N/A']
    });

    respostas.push({ ...item, resposta });

    if (resposta === 'NÃO') {
      console.log(`\n📝 Preencha os dados da Não Conformidade referente ao item: "${item.pergunta}"`);

      const ncDados = await inquirer.prompt([
        {
          type: 'input',
          name: 'responsavel',
          message: 'Responsável pela resolução:'
        },
        {
          type: 'input',
          name: 'prazo',
          message: 'Prazo para resolução (DD-MM-YYYY):'
        },
        {
          type: 'input',
          name: 'dataResolucao',
          message: 'Data da resolução (DD-MM-YYYY, deixe em branco se ainda não resolvido):',
          default: ''
        },
        {
          type: 'input',
          name: 'observacoes',
          message: 'Observações adicionais (opcional):'
        }
      ]);

      const nc = {
        id: 'NC-' + (ncs.length + 1).toString().padStart(3, '0'),
        itemCheckId: item.id,
        descricao: item.pergunta,
        status: ncDados.dataResolucao.trim() ? 'RESOLVIDA' : 'PENDENTE',
        responsavel: ncDados.responsavel,
        prazo: ncDados.prazo,
        dataRegistro: new Date().toISOString().split('T')[0],
        dataResolucao: ncDados.dataResolucao,
        observacoes: ncDados.observacoes
      };

      ncs.push(nc);
    }
  }

  const aplicaveis = respostas.filter(r => r.resposta !== 'N/A');
  const conformes = aplicaveis.filter(r => r.resposta === 'SIM');
  const aderencia = (conformes.length / aplicaveis.length * 100).toFixed(2);

  console.log(`\n✅ Aderência: ${aderencia}%`);

  fs.writeFileSync('./ncs.json', JSON.stringify(ncs, null, 2));

  if (ncs.length) {
    console.log('\n❌ Não Conformidades registradas:');
    ncs.forEach(nc => {
      console.log(`- ${nc.id}: ${nc.descricao} (Responsável: ${nc.responsavel}, Status: ${nc.status})`);
    });
    console.log('\n💾 Arquivo "ncs.json" atualizado com sucesso!');
  } else {
    console.log('\n🎉 Nenhuma não conformidade encontrada!');
    console.log('\n💾 Arquivo "ncs.json" foi limpo para refletir isso.');
  }

  console.log('\n🔚 Auditoria finalizada.\n');
})();

