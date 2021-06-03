//Pegar os projetos do localStorage e mostrar na pagina
const todosOsProjetos = document.querySelector('.codigos')

new function () {
    mostraProjetos()
}

function mostraProjetos() {
    if (localStorage.length == 0) {
        return
    }
    let projetos = []
    for (let i = 0; i < localStorage.length; i++) {
        projetos.push(JSON.parse(localStorage.getItem(i)))
    }
    projetos.forEach(projeto => {
        todosOsProjetos.innerHTML += montaCartao(projeto)
        const codigoHTML = todosOsProjetos.querySelector(`[data-id="${projeto.id}"]`)
        codigoHTML.querySelector('code').innerText = projeto.detalhesDoProjeto.codigo
    })
}

function montaCartao(projeto) {
    let cartao =
    `
    <div class="codigos__codigo_e_info" data-id="${projeto.id}">
        <div class="codigo__background" style="background-color: ${projeto.detalhesDoProjeto.corDeFundo};">
            <div class="codigo__background-icone">
                <img src="img/mac_buttons.svg" alt="Botões Mac" class="codigo__background-icone-img">
                <code class="codigo hljs ${projeto.detalhesDoProjeto.linguagem}" spellcheck="false"></code>
            </div>
        </div>
        <div class="info">
            <div class="info__info">
                <h2 class="titulo">${projeto.detalhesDoProjeto.nomeDoProjeto}</h2>
                <p class="descricao">${projeto.detalhesDoProjeto.descricaoDoProjeto}</p>
            </div>
            <div class="social">
                <div class="buttons">
                    <div class="comments">
                        <span class="comment btn_comment"></span>
                        <h3>9</h3>
                    </div>
                    <div class="likes">
                        <span class="like btn_like"></span>
                        <h3>9</h3>
                    </div>
                </div>
                <div class="autor">
                    <a href="#">
                        <img class="img-user" src="img/foto-user.png" alt="Foto do usuário">
                        <h3>@Harry</h3>
                    </a>
                </div>
            </div>
        </div>
    </div>
    `
    return cartao
}

//Div social dropdown
const projetosInfo = document.querySelectorAll('.info')
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
    if (botao.classList.contains('btn_like_checked')) {
        qtd.innerText = qtdLikes + 1
    } else {
        qtd.innerText = qtdLikes - 1
    }
}