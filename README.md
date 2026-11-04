# 🚀 TIC 7º Ano: Introdução à Programação & Python

Aplicação web educativa e interativa concebida para alunos do **7º ano do Ensino Básico** para a disciplina de **Tecnologias da Informação e Comunicação (TIC)**.

Construída com **React 19**, **Vite**, **TypeScript** e **Tailwind CSS**, inclui suporte completo para **Modo Claro e Modo Escuro** (com persistência no `localStorage`).

---

## 📚 Funcionalidades da Aplicação

1. **Módulos Teóricos Interativos**:
   - Hardware vs. Software e Arquitetura de Computadores (Entrada $\rightarrow$ CPU / RAM $\rightarrow$ Saída).
   - Conversor interativo de unidades de memória (bit, Byte, KB, MB, GB, TB) e frequências de CPU (Hz, KHz, MHz, GHz).
   - Tipos de Software (Aplicação vs. Sistema) e Linguagens Formais vs. Naturais.
   - Os 6 passos para construir um Algoritmo com exemplos do quotidiano (Jarro Elétrico e Percurso para a Escola).
   - Regras de variáveis (*case-sensitive*), constantes, tipos de dados (`int`, `float`, `bool`, `str`) e testador de operadores lógicos.
   - Símbolos gráficos de fluxogramas (Oval, Paralelogramo, Retângulo, Losango, Círculo e Seta) e estruturas de controlo.
   - Introdução prática a Python e manipulador visual de listas (`append`, `pop`, `sort`, `count`, `insert`, `len`).

2. **Exercícios do Manual Resolvidos (EX 1 ao EX 23)**:
   - Visualização comparativa em **Pseudocódigo**, **Fluxograma Gráfico**, **Código Python 3** e **Simulador com Consola Virtual**.

3. **Zona de Jogos Didáticos**:
   - **Jogo de Correspondência**: Periféricos, formas de fluxograma, tipos de dados e métodos de listas.
   - **Perguntas Verdadeiro / Falso**: 15 questões com explicações imediatas em português de Portugal.
   - **Quiz de Escolha Múltipla**: 12 perguntas estilo concurso com pontuação.
   - **Monta o Algoritmo**: Jogo de ordenar passos lógicos.
   - Sistema de pontuação, medalhas colecionáveis e celebrações com confetes.

4. **Laboratório Python Virtual**:
   - Teste de código direto no navegador ou ligação ao compilador online Programiz.

---

## 🌐 Publicação no GitHub (GitHub Pages)

O projeto já está configurado com **GitHub Actions** em `.github/workflows/deploy.yml` e caminhos relativos no `vite.config.ts`.

### Passo a Passo para Publicar:

1. **Cria um novo repositório no GitHub**:
   - Acede a [github.com/new](https://github.com/new) e cria um repositório (por exemplo, `tic-7ano-programacao`).

2. **Envia o código para o teu repositório**:
   ```bash
   git init
   git add .
   git commit -m "feat: lancamento do website TIC 7º Ano com jogos e modo escuro"
   git branch -M main
   git remote add origin https://github.com/<O-TEU-UTILIZADOR>/<O-TEU-REPOSITORIO>.git
   git push -u origin main
   ```

3. **Ativar o GitHub Pages no repositório**:
   - No GitHub, vai ao separador **Settings** do teu repositório.
   - No menu lateral esquerdo, clica em **Pages**.
   - Em **Build and deployment** $\rightarrow$ **Source**, seleciona **GitHub Actions**.
   - O fluxo de trabalho `.github/workflows/deploy.yml` compilará o projeto automaticamente e publicará o site no teu link `https://<O-TEU-UTILIZADOR>.github.io/<O-TEU-REPOSITORIO>/`!

---

## 💻 Como Executar Localmente

```bash
# 1. Instalar as dependências
npm install

# 2. Iniciar o servidor de desenvolvimento
npm run dev

# 3. Compilar para produção
npm run build

# 4. Pré-visualizar a versão de produção
npm run preview
```

---

*Projeto desenvolvido com ❤️ para os alunos de TIC do 7º ano.*
