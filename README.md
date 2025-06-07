# ✅ Sistema de Auditoria de Qualidade – Node.js (CLI)

Este projeto implementa um sistema simples e automatizado de auditoria de qualidade baseado em **checklist**, desenvolvido com **Node.js** e executado via linha de comando. A solução permite verificar itens de um artefato (ex: plano de projeto), calcular a **porcentagem de aderência** e registrar **não conformidades (NCs)**.

---

## 📋 Sobre o Projeto

O sistema simula a atividade de verificação de conformidade com base em perguntas objetivas. Foi desenvolvido sem o uso de ferramentas prontas como Excel ou sistemas de auditoria existentes, atendendo aos seguintes objetivos:

- Aplicar auditoria automatizada por checklist
- Armazenar não conformidades identificadas
- Gerar % de aderência automaticamente
- Trabalhar com arquivos simples (`JSON`) como entrada e saída

---

## ⚙️ Funcionalidades

- 📋 **Checklist de verificação**
- ✅ **Cálculo automático da aderência**
- ❌ **Registro de não conformidades (NCs)**
- 💾 **Armazenamento persistente em `ncs.json`**
- 🖥️ **Execução 100% via terminal**

---

## 📂 Estrutura do Projeto
```
  auditoria-qualidade/
  ├── auditoria.js # Código principal
  ├── checklist.json # Perguntas da auditoria
  ├── ncs.json # Registro das NCs geradas
  ├── package.json # Configuração de dependências
  └── package-lock.json # Detalhes técnicos das dependências
```

---

## 🚀 Como Executar

### 1. Instale o Node.js (se ainda não tiver):
➡️ https://nodejs.org


### 2. Libere a execução de scripts no PowerShell (apenas no Windows):

Abra o PowerShell como **Administrador** e digite:

```powershell
Set-ExecutionPolicy RemoteSigned
Digite S quando perguntado.
```

### 3. Instale o projeto

Abra o terminal no VS Code e execute:

```
npm install
```
### 4. Execute a auditoria
```
node auditoria.js
```
### 5. Exemplo de Execução:

📋 Iniciando Auditoria

1. O plano tem identificação do projeto? [SIM/NÃO/N/A]
2. As partes interessadas estão descritas? [SIM/NÃO/N/A]
...

✅ Aderência: 75%
❌ Não Conformidades encontradas:
- NC-001: As partes interessadas estão descritas?
- NC-002: Riscos foram analisados?

💾 NCs salvas no arquivo ncs.json

🔚 Auditoria finalizada.

---

## 👨‍💼 Autor
- Projeto desenvolvido por: Emmnauel Victorio, Misael Rodrigues e Otávio Augusto.
- Disciplina Qualidade de Software – Engenharia de Software
- Professor(a): Kelly Christine Landolfi Bettio
- Instituição: PUCPR
---
## 🖼 Exemplos de Gráficos
- 📊 Gráfico 1 – Colisões na Inserção
![grafico1_colisoes_insercao](https://github.com/user-attachments/assets/c68fe19a-7880-4f3d-b8e9-311eb6aead55)
- ⏱️ Gráfico 2 – Tempo Médio de Busca
![grafico2_tempo_busca](https://github.com/user-attachments/assets/ca64e8da-6fff-4f2c-a661-9ac98fd241ee)
- 🔍 Gráfico 3 – Comparações Médias de Busca
![grafico3_comparacoes_busca](https://github.com/user-attachments/assets/d5818b1a-8102-4335-8a0d-400e9469f24e)




