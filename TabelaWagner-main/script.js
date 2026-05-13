
let dadosGlobais = [];


window.onload = function() {
    busca();
};

function busca() {
    fetch('dados.json')
        .then(response => response.json())
        .then(dadinhos =>{
            dadosGlobais = dadinhos; 
            let tablet = document.getElementById('place');
            tablet.innerHTML = ""; 

            dadinhos.forEach(pessoinha => {
                let linha = document.createElement('tr');
                let statusTexto = pessoinha.ativo ? "Ativo" : "Inativo";

                linha.innerHTML =
                "<td>" + pessoinha.nome + "</td>" + 
                "<td>" + pessoinha.idade + "</td>" +
                "<td>" + pessoinha.personalidade + "</td>" +
                "<td>" + pessoinha.cidade + "</td>" +
                "<td>" + statusTexto + "</td>";
                
                tablet.appendChild(linha);
            });
        })
}

function mostrarColuna(propriedade) {

    if (dadosGlobais.length === 0) {
        alert("Os dados ainda não foram carregados!");
        return;
    }

    let titulo = document.getElementById('modalTitulo');
    let lista = document.getElementById('modalLista');
    
   
    titulo.innerText = "Dados da Coluna: " + propriedade.toUpperCase();
    lista.innerHTML = ""; 


    dadosGlobais.forEach(pessoinha => {
        let item = document.createElement('li');
        let valor = pessoinha[propriedade];


        if (propriedade === 'ativo') {
            valor = valor ? "Ativo" : "Inativo";
        }

        item.innerText = valor;
        lista.appendChild(item);
    });

    document.getElementById('minhaModal').style.display = 'flex';
}

function fecharModal() {
    document.getElementById('minhaModal').style.display = 'none';
}
