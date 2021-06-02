const projetos = document.querySelectorAll('.codigos__codigo_e_info')
const projetosInfo = document.querySelectorAll('.info')
//Estilizar o código com highlight.js
projetos.forEach(projeto => {
    const editorCodigo = projeto.querySelector('.codigo')
    hljs.highlightElement(editorCodigo)
})

//Div social dropdown
projetosInfo.forEach(Info => {
    Info.addEventListener('mouseenter', function () {
        const divInfo = Info.querySelector('.info__info')
        const divSocial = Info.querySelector('.social')
        divInfo.classList.toggle('active');
        divSocial.classList.toggle('active');
    
    })

    Info.addEventListener('mouseleave', function () {
        const divInfo = Info.querySelector('.info__info')
        const divSocial = Info.querySelector('.social')
        divInfo.classList.toggle('active');
        divSocial.classList.toggle('active');
    })
})

// Botão de like
projetosInfo.forEach(Info => {
    const numLikes = Info.querySelector('.likes h3')
    const btnLike = Info.querySelector('.like')

    btnLike.addEventListener('click', (evt) => {
        evt.preventDefault()   
        like(btnLike, numLikes)
    })

    btnLike.addEventListener('touchstart', (evt) => {
        evt.preventDefault()
        like(btnLike, numLikes)
    })
})

function like(botao, qtd) {
    botao.classList.toggle('btn_like')
    botao.classList.toggle('btn_like_checked')
    const qtdLikes = parseInt(qtd.innerText)
    if(botao.classList.contains('btn_like_checked')){
        qtd.innerText = qtdLikes + 1
    } else {
        qtd.innerText = qtdLikes - 1
    }
}