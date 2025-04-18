const preco = {
    pitufina: 499.00,
    papapitufo: 999.00,
    pitufocat: 149.00,
    lospitufos: -1.00
};
 
const produtos = [
    {
        titulo: "Pitufet",
        preco: preco.pitufina,
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUtSV-WaMHwQTx8NlqDaXbAJ6jCJM_MnYGUw&s"
    },
    {
        titulo: "Papa Pitufo",
        preco: preco.papapitufo,
        imagem: "https://i.pinimg.com/736x/9e/9a/db/9e9adb6ebcbc36ee8c7fbc23a57b9e1b.jpg"
    },
    {
        titulo: "Beautifull Pitufocat",
        preco: preco.pitufocat,
        imagem: "https://preview.redd.it/pfmydxl0ago41.png?auto=webp&s=20559097fcf2ad6cdb214205c9e638d4cb930198"
    },
    {
        titulo: "Los Pitufos",
        preco: preco.lospitufos,
        imagem: "https://i.pinimg.com/originals/9f/09/88/9f0988b77aad2452092d2f12081a9a31.gif"
    }
];
 

const produtosNaCesta = [];
 

const container = document.getElementById('container');
 

 

function adicionarProdutosAoContainer() {
    produtos.forEach((produto, index) => {
        const divProduto = document.createElement('div');
        divProduto.classList.add('produto');
        divProduto.innerHTML = `
            <img class="ps4" src="${produto.imagem}" alt="${produto.titulo}">
            <h1 class="ps4titulo">${produto.titulo}</h1>
            <h2 class="preco"><b>R$ ${produto.preco.toFixed(2)}</b></h2>
            <button class="comprar" data-index="${index}">Comprar</button>
        `;
        container.appendChild(divProduto);
    });
 
    const botoesComprar = document.querySelectorAll('.comprar');
    botoesComprar.forEach(botao => {
        botao.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            adicionarProdutoNaCesta(index);
        });
    });
}
 


adicionarProdutosAoContainer();