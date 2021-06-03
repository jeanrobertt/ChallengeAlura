const botaoSalvar = document.querySelector('.info__botao_salvar')
const tituloProjeto = document.querySelector('#projeto-name')
const descricaoProjeto = document.querySelector('#projeto-descricao')

botaoSalvar.addEventListener('click', () => {
    if(typeof(Storage) !== 'undefined'){
        const projeto = montaProjeto()
        salvarLocalStorage(projeto)
    } else {
        alert('Não suporta localStorage')
    }
})

function montaProjeto() {
    let projeto = {
        'id': localStorage.length,
        'detalhesDoProjeto': {
            'nomeDoProjeto': tituloProjeto.value,
            'descricaoDoProjeto': descricaoProjeto.value,
            'linguagem': linguagem.value,
            'codigo': areaDoCodigo.querySelector('code').innerText,
            'corDeFundo': background.style.backgroundColor
        }
    }
    return projeto
}

function salvarLocalStorage(objetoJSON) {
    localStorage.setItem(objetoJSON.id, JSON.stringify(objetoJSON))
}