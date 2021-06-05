//Visualizar com HighLigh
const areaDoCodigo = document.querySelector('.codigo__background-icone')
const linguagem = document.querySelector('.linguagem')
const botao = document.querySelector('.codigo__botao')

function mudaLinguagem() {
    const codigo = areaDoCodigo.querySelector('code').innerText
    $('.editor').removeClass().addClass(`editor hljs ${linguagem.value}`)
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

    $('.linguagem').removeClass().addClass(`linguagem ${optionLinguagem}`)
});

//Ajustando a altura do campo de código
$(function(){
    $('.editor').on('keydown', function(){
        ajustaAltura()
    })
})

function ajustaAltura() {
    let editor = document.querySelector('.editor')
    if(editor.firstElementChild == null){
        return
    }
    if(editor.lastElementChild.tagName == 'DIV'){
        let lastDiv = $('.editor div:last-child')
        let posDiv = lastDiv.position()
        let heightDiv = lastDiv.outerHeight()
        if(lastDiv.length > 0) {
            if(posDiv.top + heightDiv >= 250){
                $('.editor').css('height', 'auto')
            } else {
                $('.editor').css('height', '250px')
            }
        }
    } else if(editor.lastChild.tagName == 'SPAN'){
        $('.editor').css('height', 'auto')
    }
}