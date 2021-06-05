const botaoSalvar = document.querySelector('.info__botao_salvar')
const tituloProjeto = document.querySelector('#projeto-name')
const descricaoProjeto = document.querySelector('#projeto-descricao')

botaoSalvar.addEventListener('click', () => {
    if (typeof (Storage) !== 'undefined') {
        //Verifica se todos os campos estão preenchidos
        const verificacao = verificaCampos()
        if (verificacao) {
            /*Se estiverem preenchidos, vai montar o projeto salvar, mostrar um alert de que foi salvo e recarregar a pagina*/
            const projeto = montaProjeto()
            salvarLocalStorage(projeto)
            alert('Projeto Salvo');
            window.location.reload();
        } else {
            return
        }
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

function verificaCampos() {
    //Sempre que fizer a verificação vai remover o texto de que foi preenchido caso
    let tagValidacao = document.querySelector(".validacao");
    if(tagValidacao !== null){
        if (tagValidacao.parentNode) {
            tagValidacao.parentNode.removeChild(tagValidacao);
        }
    }

    let txtValidacao = '<i class="validacao">Preencha este campo</i>'

    let camposDeTexto = [tituloProjeto, descricaoProjeto]
    let n = 0
    camposDeTexto.forEach(campo => {
        if(campo.value == ""){
            campo.insertAdjacentHTML('beforebegin', txtValidacao)
            campo.focus()
            n++
        }
    })

    if(n > 0){
        return false
    }

    if (areaDoCodigo.querySelector('code').innerText == "") {
        alert('Preencha o campo de código!')
        areaDoCodigo.querySelector('code').focus()
        return false
    } else {
        return true
    }
}