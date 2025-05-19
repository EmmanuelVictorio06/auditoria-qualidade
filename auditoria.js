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
      const { responsavel, prazo, observacoes } = await inquirer.prompt([
        {
          type: 'input',
          name: 'responsavel',
          message: 'Informe o responsável pela resolução da NC:'
        },
        {
          type: 'input',
          name: 'prazo',
          message: 'Informe o prazo para resolução (YYYY-MM-DD):'
        },
        {
          type: 'input',
          name: 'observacoes',
          message: 'Observações (opcional):'
        }
      ]);

      const nc = {
        id: 'NC-' + (ncs.length + 1).toString().padStart(3, '0'),
        itemCheckId: item.id,
        descricao: item.pergunta,
        status: 'PENDENTE',
        responsavel,
        prazo,
        dataRegistro: new Date().toISOString().split('T')[0],
        dataResolucao: '',
        observacoes
      };
      ncs.push(nc);
    }
  }

  const aplicaveis = respostas.filter(r => r.resposta !== 'N/A');
  const conformes = aplicaveis.filter(r => r.resposta === 'SIM');
  const aderencia = (conformes.length / aplicaveis.length * 100).toFixed(2);

  console.log(`\n✅ Aderência: ${aderencia}%`);

  if (ncs.length) {
    console.log('\n❌ Não Conformidades encontradas:');
    ncs.forEach(nc => {
      console.log(`- ${nc.id}: ${nc.descricao} (Responsável: ${nc.responsavel}, Prazo: ${nc.prazo})`);
    });

    fs.writeFileSync('./ncs.json', JSON.stringify(ncs, null, 2));
    console.log('\n💾 NCs salvas no arquivo ncs.json');
  } else {
    console.log('\n🎉 Nenhuma não conformidade encontrada!');
  }

  console.log('\n🔚 Auditoria finalizada.\n');
})();

