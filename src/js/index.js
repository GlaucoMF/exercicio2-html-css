const clicarBtn = document.querySelector('.avancar-conselho')
const conselho = document.querySelector('.id-conselho')
const descricao = document.querySelector('.descricao-conselho')

async function gerarConselho() {
    const resposta = await fetch("https://api.adviceslip.com/advice");
    const conteudoConselho = await resposta.json();
    const idConselho = `Conselho #${conteudoConselho.slip.id}`;
    const descricaoConselho = `"${conteudoConselho.slip.advice}"`;
    
    conselho.innerHTML = idConselho;
    descricao.innerHTML = descricaoConselho
}

clicarBtn.addEventListener("click", gerarConselho);

gerarConselho()