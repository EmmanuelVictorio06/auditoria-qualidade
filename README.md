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

- auditoria-qualidade/
-├── auditoria.js # Código principal
-├── checklist.json # Perguntas da auditoria
-├── ncs.json # Registro das NCs geradas
-├── package.json # Configuração de dependências
-└── package-lock.json # Detalhes técnicos das dependências

---

## 🚀 Como Executar

### 1. Instale o Node.js (se ainda não tiver):
➡️ https://nodejs.org

---

### 2. Libere a execução de scripts no PowerShell (apenas no Windows):

Abra o PowerShell como **Administrador** e digite:

```powershell
Set-ExecutionPolicy RemoteSigned




