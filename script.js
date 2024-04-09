const form = document.querySelector("#formulario")
const nameInput = document.querySelector("#nome")
const sobrenomeInput = document.querySelector("#sobrenome")
const mailInput = document.querySelector("#email")
//const areaTecInput = document.querySelector("#")
//const SenioridadeInput = document.querySelector("#")
//const LinguagensInput = document.querySelector("#")
//const ExperienciaInput = document.querySelector("#")
//const senhaInput = document.querySelector("#")

form.addEventListener("submit", (event) => {
    event.preventDefault();

//verifica se o nome está vazio
    if(nameInput.value === ""){
        alert("Por favor, preencha o seu nome");
        return
}

//verifica se o email esta preenchido e se é valido
if(mailInput.value === "" || !isEmailValid(mailInput.value)){
    alert("Por favor, preencha o seu email");
    return;
}

//Se todos os campos estiverem preenchidos, envie o form
form.submit
});

// Fun;áo que valida e-mail
function isEmailValid(email){
    //cria regex para validar email
    const emailRegex = new RegExp(
        // usuario12@host.com
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
        );
        if (emailRegex.test(email)) {
            return true;
        }

        return false;
}