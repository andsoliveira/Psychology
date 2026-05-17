# 🧠 Psychology

Sistema web interativo desenvolvido com foco em neurociência, comportamento humano e hormônios do bem-estar.

---

## 📖 Sobre o Projeto

O Psychology é um projeto web desenvolvido para apresentar conceitos de neurociência de forma visual e interativa.

O sistema possui:
- cadastro e login de usuários;
- quiz interativo;
- dashboard de desempenho;
- armazenamento de resultados no banco de dados;
- gráficos dinâmicos;
- análise da última tentativa realizada pelo usuário.

O objetivo do projeto é demonstrar como hormônios e neurotransmissores podem influenciar emoções, comportamento e bem-estar.

---

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Node.js
- Express
- MySQL
- Chart.js

---

## ✅ Funcionalidades

- Cadastro de usuários
- Sistema de login
- Controle de sessão
- Quiz interativo
- Armazenamento de resultados
- Dashboard dinâmica
- KPI de desempenho
- Gráficos com Chart.js
- Exibição da última tentativa do usuário

---

## 📂 Estrutura do Projeto

```bash
src/
├── controllers/
├── models/
├── routes/
├── database/
├── public/
│   ├── css/
│   ├── js/
│   ├── dashboard/
│   └── assets/
```

---

## 🗄️ Banco de Dados

O sistema utiliza MySQL para armazenar usuários e resultados do quiz.

### Tabela Usuario

- idUsuario
- nome
- email
- senha

### Tabela QuizResultado

- idResultado
- fkUsuario
- serotonina
- dopamina
- endorfina
- ocitocina
- acertos
- totalPerguntas
- dataResposta

---

## 🔄 Fluxo do Sistema

1. Usuário realiza login
2. Sistema armazena a sessão do usuário
3. Usuário responde o quiz
4. Resultado é enviado para a API
5. Backend salva os dados no MySQL
6. Dashboard busca a última tentativa
7. Dados são renderizados em gráficos e KPIs

---

## 📊 Dashboard

A dashboard apresenta:
- porcentagem dos hormônios;
- desempenho do usuário;
- gráficos interativos;
- análise da última tentativa realizada.

---

## 🧠 Neurociência

O projeto foi inspirado em estudos relacionados aos hormônios do bem-estar:

- Serotonina
- Dopamina
- Endorfina
- Ocitocina

As pesquisas utilizadas foram baseadas em conteúdos científicos e educacionais sobre emoções, comportamento humano e funcionamento cerebral.

---

## ⚙️ Como Executar o Projeto

### Clone o repositório

```bash
git clone https://github.com/andsoliveira/Psychology
```

### Entre na pasta do projeto

```bash
cd Psychology
```

### Instale as dependências

```bash
npm install
```

### Configure o banco de dados

Execute o script SQL localizado em:

```bash
src/database/script-tabelas.sql
```

### Inicie o servidor

```bash
npm start
```

---

## Melhorias Futuras

- Histórico completo de quizzes
- Dashboard comparativa
- Ranking de usuários
- Responsividade mobile
- Novos gráficos
- Sistema de conquistas

---

## 👨‍💻 Autor

Desenvolvido por Anderson Oliveira.
