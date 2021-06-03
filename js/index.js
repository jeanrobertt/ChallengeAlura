//Visualizar com HighLigh
const areaDoCodigo = document.querySelector('.codigo__background-icone')
const linguagem = document.querySelector('.linguagem')
const botao = document.querySelector('.codigo__botao')

function mudaLinguagem() {
    const codigo = areaDoCodigo.querySelector('code').innerText
    areaDoCodigo.innerHTML = `<img src="img/mac_buttons.svg" alt="Botões Mac" class="codigo__background-icone-img"> <code class="editor hljs ${linguagem.value}" spellcheck="false" contenteditable="true" aria-label="editor"></code>`
    areaDoCodigo.querySelector('.editor').innerText = codigo
}

linguagem.addEventListener('change', () => {
    mudaLinguagem()
})

botao.addEventListener('click', () => {
    const codigo = areaDoCodigo.querySelector('code')
    hljs.highlightElement(codigo)
})

//Trocar a cor do background do código
const botaoCor = document.querySelector('.info__personalizacao-selecao_cor')
const background = document.querySelector('.codigo__background')

botaoCor.addEventListener('input', () => {
    background.style.backgroundColor = botaoCor.value
})

//Adicionando a linguagem que está sendo utilizada na classe do select
linguagem.addEventListener('change', function () {
    let optionLinguagem = linguagem.options[linguagem.selectedIndex].value

    $('.linguagem').removeClass();
    linguagem.classList.add('linguagem', optionLinguagem)
});

//Ajustando a altura do campo de código.
/*const editor = document.querySelector('code.editor');
editor.addEventListener('click', () => {
    editor.style.height = 'auto'
})

editor.addEventListener('blur', () => {
    if($('.editor').height >= 250){
        editor.style.height = 'auto'
        console.log('Maior');
    } else {
        editor.style.height = '250px'
        console.log('Menor');
    }
})*/