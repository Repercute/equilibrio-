const form = document.getElementById("formLogin");
const btnEntrar = document.getElementById("btnEntrar");
const btnCadastrar = document.getElementById("btnCadastrar");

function mostrarLogin() {
    form.innerHTML = `
    <input type="email" placeholder="Escreva o email da conta" required>
    <input type="password" placeholder="Escreva a senha da conta" required>
    <button type="submit">Entrar</button>
    <button class="esquecisenha" type="button" id="btnEsqueciSenha">Esqueceu sua senha?</button>  
             
    `;

    const btnEsqueciSenha = document.getElementById("btnEsqueciSenha");
    btnEsqueciSenha.addEventListener("click", function() {
        window.location.href = "esqueci-senha.html";
    });
}


function mostrarCadastro() {
    form.innerHTML = `
        <input type="text" placeholder="Digite seu nome" required>
        <input type="email" placeholder="Digite seu email" required>
        <input type="password" placeholder="Crie uma senha" required>
        <input type="password" placeholder="Confirme a senha" required>
        <button type="submit">Cadastrar</button>
    `;
}


mostrarLogin();


btnEntrar.addEventListener("click", mostrarLogin);
btnCadastrar.addEventListener("click", mostrarCadastro);
