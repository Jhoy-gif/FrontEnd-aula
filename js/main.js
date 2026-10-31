const demonstrations = {
    html: {
        code: '<article>\n  <h2>Olá, mundo!</h2>\n  <p>Uma página começa com uma ideia.</p>\n  <button>Clique aqui</button>\n</article>',
        explanation: 'HTML cria os elementos e organiza o conteúdo da página.',
        title: 'Olá, mundo!',
        message: 'Uma página começa com uma ideia.'
    },
    css: {
        code: 'article {\n  background: #e6ff5c;\n  padding: 2rem;\n  border-radius: 1rem;\n}\n\nbutton {\n  border-radius: 2rem;\n}',
        explanation: 'CSS controla a aparência: aqui, muda o fundo, o espaço e as formas.',
        title: 'Olá, mundo!',
        message: 'Uma página começa com uma ideia.'
    },
    js: {
        code: 'const botao = document.querySelector("button");\n\nbotao.addEventListener("click", () => {\n  document.querySelector("h2").textContent = "Você conseguiu!";\n});',
        explanation: 'JavaScript responde às ações. Clique no botão da prévia para testar.',
        title: 'Olá, mundo!',
        message: 'Uma página começa com uma ideia.'
    }
};

const tabs = document.querySelectorAll('.code-tab');
const codeSample = document.getElementById('code-sample');
const codeExplanation = document.getElementById('code-explanation');
const previewCard = document.getElementById('preview-card');
const previewTitle = document.getElementById('preview-title');
const previewMessage = document.getElementById('preview-message');
const previewButton = document.getElementById('preview-button');

function showDemonstration(name) {
    const demonstration = demonstrations[name];

    tabs.forEach((tab) => {
        const isActive = tab.dataset.demo === name;
        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-pressed', String(isActive));
    });

    codeSample.textContent = demonstration.code;
    codeExplanation.textContent = demonstration.explanation;
    previewTitle.textContent = demonstration.title;
    previewMessage.textContent = demonstration.message;
    previewCard.classList.toggle('is-styled', name === 'css');
}

tabs.forEach((tab) => {
    tab.addEventListener('click', () => showDemonstration(tab.dataset.demo));
});

previewButton.addEventListener('click', () => {
    const hasChanged = previewTitle.textContent === 'Você conseguiu!';
    previewTitle.textContent = hasChanged ? 'Olá, mundo!' : 'Você conseguiu!';
    previewMessage.textContent = hasChanged
        ? 'Uma página começa com uma ideia.'
        : 'O JavaScript respondeu ao seu clique.';
});

showDemonstration('html');
