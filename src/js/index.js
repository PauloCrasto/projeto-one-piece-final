// window.alert("oi") / Alerta para os usuários de um site //
/*O que precisamos fazer? - quando clicar no botão do personagem na lista, temos que marcar o botão como selecionado e mostrar o personagem correspondente.

OBJETIVO 1 - quando clicar no botão o personagem na lista, marcar o botao como selecionado
passo 1 - pegar os botoes no JS para poder verificar quando o usario clicar em cima de um deles
passo 2 - adicionar a classe "selecionado" no botao que o usuario clicou
passo 3 - verificar se já existe um botao selecionado, se sim, devemos remover a selecao dele

OBJETIVO 2 - quando clicar no botao do personagem mostrar as informacoes do personagem
passo 1 - pegar os personagens no JS para poder mostrar ou esconder ele
passo 2 - adicionar a classe "selecionado" no personagem que o usuario selecionou
passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a selecao dele. */

//OBJETIVO 01
const botoes = document.querySelectorAll('.botao');

//OBJETIVO 02
//PASSO 1
const personagens = document.querySelectorAll(".personagem");

//PASSO 2
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        
        //PASSO 3
        desselecionarBotao();

        //PASSO 2
        botao.classList.add("selecionado");

        desselecionarPersonagem();
        personagens[indice].classList.add("selecionado");  
    })
}); 

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
/*//passo 2 - adicionar a classe "selecionado" no botao que o usuario clicou
botoes.addEventListener("click", () => {
    console.log("clicou no botão");
})*/
