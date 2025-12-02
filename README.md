<div align="center">

# 🎲 Advice Generator App

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Frontend Mentor](https://img.shields.io/badge/Frontend_Mentor-3F54A3?style=for-the-badge&logo=frontendmentor&logoColor=white)](https://www.frontendmentor.io/)

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Status](https://img.shields.io/badge/Status-Completed-success?style=flat-square)](https://github.com/juliafcastro/Advices-Generator)
[![Responsive](https://img.shields.io/badge/Responsive-Yes-blue?style=flat-square)](https://github.com/juliafcastro/Advices-Generator)

</div>

---

## 📸 Preview / Prévia

<div align="center">

### 🖥️ Desktop

<img src="design/desktop-design.jpg" alt="Desktop Preview" width="700"/>

### 📱 Mobile

<img src="design/mobile-design.jpg" alt="Mobile Preview" width="300"/>

### ✨ Active States / Estados Ativos

<img src="design/active-states.jpg" alt="Active States" width="700"/>

</div>

---

<details>
<summary>🇧🇷 <strong>Português</strong></summary>

## 📋 Índice

- [Sobre](#-sobre)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Como Funciona](#-como-funciona)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar](#-como-executar)
- [API Utilizada](#-api-utilizada)
- [Design](#-design)
- [Autor](#-autor)

## 📖 Sobre

Este projeto é uma solução para o desafio [Advice Generator App](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db) do **Frontend Mentor**. O aplicativo gera conselhos aleatórios consumindo uma API externa, proporcionando uma experiência interativa e responsiva.

## ✨ Funcionalidades

- 🎲 **Gerar conselhos aleatórios** - Clique no botão do dado para receber um novo conselho
- 📱 **Design responsivo** - Layout adaptável para desktop (1440px) e mobile (375px)
- 🎨 **Estados de hover** - Efeitos visuais interativos nos elementos clicáveis
- ⚡ **Animações suaves** - Transições CSS e animação de rotação no dado
- 🔢 **Numeração dos conselhos** - Cada conselho exibe seu ID único da API

## 🛠️ Tecnologias

| Tecnologia          | Descrição                               |
| ------------------- | --------------------------------------- |
| **HTML5**           | Estrutura semântica da página           |
| **CSS3**            | Estilização com Flexbox e Media Queries |
| **JavaScript**      | Lógica e consumo da API com Fetch       |
| **Google Fonts**    | Fonte Manrope (peso 800)                |
| **Animate.css**     | Biblioteca de animações CSS             |
| **Advice Slip API** | API para geração de conselhos           |

## ⚙️ Como Funciona

### Estrutura HTML

```html
<main>
  <h2 id="advice-id">ADVICE</h2>
  <p id="p-advice">"Texto do conselho..."</p>
  <img src="images/pattern-divider-desktop.svg" class="divider" />
  <button id="dice">
    <img src="images/icon-dice.svg" class="dice-img" />
  </button>
</main>
```

### Lógica JavaScript

O sistema utiliza a **Fetch API** para consumir dados:

```javascript
// Ao clicar no botão, busca um novo conselho
diceBtn.addEventListener("click", () => {
  getAdvice();
  getId();
});

// Função que obtém o conselho da API
function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((adviceData) => {
      advicesP.innerText = adviceData.slip.advice;
    });
}
```

### Paleta de Cores

| Cor                 | HSL                   | Uso                       |
| ------------------- | --------------------- | ------------------------- |
| 💚 Verde            | `hsl(150, 100%, 66%)` | Botão, títulos, destaques |
| 🩵 Azul Claro        | `hsl(193, 38%, 86%)`  | Texto do conselho         |
| 🔵 Azul Escuro      | `hsl(217, 19%, 24%)`  | Card principal            |
| 🌑 Azul Mais Escuro | `hsl(218, 23%, 16%)`  | Fundo da página           |

## 📁 Estrutura do Projeto

```
advice-generator-app/
├── 📄 index.html          # Estrutura HTML
├── 🎨 style.css           # Estilos CSS
├── ⚡ index.js            # Lógica JavaScript
├── 📖 README.md           # Documentação
├── 📋 style-guide.md      # Guia de estilos
├── 📁 design/             # Mockups do design
│   ├── desktop-design.jpg
│   ├── mobile-design.jpg
│   └── active-states.jpg
└── 📁 images/             # Assets do projeto
    ├── favicon-32x32.png
    ├── icon-dice.svg
    ├── pattern-divider-desktop.svg
    └── pattern-divider-mobile.svg
```

## 🚀 Como Executar

1. **Clone o repositório**

   ```bash
   git clone https://github.com/juliafcastro/Advices-Generator.git
   ```

2. **Acesse a pasta do projeto**

   ```bash
   cd Advices-Generator
   ```

3. **Abra o arquivo `index.html`** no seu navegador
   - Ou utilize uma extensão como **Live Server** no VS Code

## 🔗 API Utilizada

**[Advice Slip API](https://api.adviceslip.com/)**

Endpoint utilizado:

```
GET https://api.adviceslip.com/advice
```

Resposta exemplo:

```json
{
  "slip": {
    "id": 117,
    "advice": "It is easy to sit up and take notice, what's difficult is getting up and taking action."
  }
}
```

## 🎨 Design

O projeto segue as especificações do Frontend Mentor:

- **Desktop:** 1440px
- **Mobile:** 375px
- **Fonte:** Manrope (800)

</details>

---

<details open>
<summary>🇺🇸 <strong>English</strong></summary>

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Technologies](#-technologies)
- [How It Works](#-how-it-works)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [API Used](#-api-used)
- [Design](#-design-1)
- [Author](#-author)

## 📖 About

This project is a solution for the [Advice Generator App](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db) challenge from **Frontend Mentor**. The app generates random advice by consuming an external API, providing an interactive and responsive experience.

## ✨ Features

- 🎲 **Generate random advice** - Click the dice button to receive new advice
- 📱 **Responsive design** - Adaptable layout for desktop (1440px) and mobile (375px)
- 🎨 **Hover states** - Interactive visual effects on clickable elements
- ⚡ **Smooth animations** - CSS transitions and dice rotation animation
- 🔢 **Advice numbering** - Each advice displays its unique API ID

## 🛠️ Technologies

| Technology          | Description                            |
| ------------------- | -------------------------------------- |
| **HTML5**           | Semantic page structure                |
| **CSS3**            | Styling with Flexbox and Media Queries |
| **JavaScript**      | Logic and API consumption with Fetch   |
| **Google Fonts**    | Manrope font (weight 800)              |
| **Animate.css**     | CSS animations library                 |
| **Advice Slip API** | API for advice generation              |

## ⚙️ How It Works

### HTML Structure

```html
<main>
  <h2 id="advice-id">ADVICE</h2>
  <p id="p-advice">"Advice text..."</p>
  <img src="images/pattern-divider-desktop.svg" class="divider" />
  <button id="dice">
    <img src="images/icon-dice.svg" class="dice-img" />
  </button>
</main>
```

### JavaScript Logic

The system uses the **Fetch API** to consume data:

```javascript
// On button click, fetches new advice
diceBtn.addEventListener("click", () => {
  getAdvice();
  getId();
});

// Function that gets advice from API
function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((adviceData) => {
      advicesP.innerText = adviceData.slip.advice;
    });
}
```

### Color Palette

| Color          | HSL                   | Usage                      |
| -------------- | --------------------- | -------------------------- |
| 💚 Green       | `hsl(150, 100%, 66%)` | Button, titles, highlights |
| 🩵 Light Blue   | `hsl(193, 38%, 86%)`  | Advice text                |
| 🔵 Dark Blue   | `hsl(217, 19%, 24%)`  | Main card                  |
| 🌑 Darker Blue | `hsl(218, 23%, 16%)`  | Page background            |

## 📁 Project Structure

```
advice-generator-app/
├── 📄 index.html          # HTML structure
├── 🎨 style.css           # CSS styles
├── ⚡ index.js            # JavaScript logic
├── 📖 README.md           # Documentation
├── 📋 style-guide.md      # Style guide
├── 📁 design/             # Design mockups
│   ├── desktop-design.jpg
│   ├── mobile-design.jpg
│   └── active-states.jpg
└── 📁 images/             # Project assets
    ├── favicon-32x32.png
    ├── icon-dice.svg
    ├── pattern-divider-desktop.svg
    └── pattern-divider-mobile.svg
```

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/juliafcastro/Advices-Generator.git
   ```

2. **Navigate to project folder**

   ```bash
   cd Advices-Generator
   ```

3. **Open `index.html`** in your browser
   - Or use an extension like **Live Server** in VS Code

## 🔗 API Used

**[Advice Slip API](https://api.adviceslip.com/)**

Endpoint used:

```
GET https://api.adviceslip.com/advice
```

Example response:

```json
{
  "slip": {
    "id": 117,
    "advice": "It is easy to sit up and take notice, what's difficult is getting up and taking action."
  }
}
```

## 🎨 Design

The project follows Frontend Mentor specifications:

- **Desktop:** 1440px
- **Mobile:** 375px
- **Font:** Manrope (800)

</details>

---

<div align="center">

## 👩‍💻 Author / Autora

Developed with 💚 by **Júlia Castro**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/juliafcastro)

---

### 🙏 Acknowledgments / Agradecimentos

Challenge by [Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db) | Desafio por [Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db)

---

⭐ **If you liked this project, give it a star!** | **Se gostou do projeto, deixe uma estrela!** ⭐

</div>
