//Funções dos botões de vizualização e ocultação de senha
function viewPassword() {
    const password = document.getElementById("password");
    const btnViewPassword = document.getElementById("btn-view-password");
    const btnOcultPassword = document.getElementById("btn-ocult-password");
    
    password.type = "text";
    btnViewPassword.style.display = "none";
    btnOcultPassword.style.display = "block";
}

function ocultPassword() {
    const password = document.getElementById("password");
    const btnViewPassword = document.getElementById("btn-view-password");
    const btnOcultPassword = document.getElementById("btn-ocult-password");
    
    password.type = "password";
    btnViewPassword.style.display = "block";
    btnOcultPassword.style.display = "none";
}

//Funções para retornar o estilo original dos campos quando houver digitação
function clickEmail() {
    const email = document.getElementById("email");
    const emailContainer = document.getElementsByClassName("email-container")[0];
    const personIcon = document.getElementById("icon-person");
    const password = document.getElementById("password");
    const passwordContainer = document.getElementsByClassName("password-container")[0];
    const keyIcon = document.getElementById("icon-key");
    const openEyeIcon = document.getElementById("icon-open-eye");
    const closedEyeIcon = document.getElementById("icon-closed-eye");
    let error = document.getElementById("error-alert");

    addEventListener("keypress", () => {
        error.innerHTML = "";
        emailContainer.style.border = "none"
        email.style.color = "#BCBDC2";
        personIcon.style.fill = "white";
        passwordContainer.style.border = "none"
        password.style.color = "#BCBDC2";
        keyIcon.style.fill = "white";
        openEyeIcon.style.fill = "white";
        closedEyeIcon.style.fill = "white";
    })
}

function clickPassword() {
    const email = document.getElementById("email");
    const emailContainer = document.getElementsByClassName("email-container")[0];
    const personIcon = document.getElementById("icon-person");
    const password = document.getElementById("password");
    const passwordContainer = document.getElementsByClassName("password-container")[0];
    const keyIcon = document.getElementById("icon-key");
    const openEyeIcon = document.getElementById("icon-open-eye");
    const closedEyeIcon = document.getElementById("icon-closed-eye");
    let error = document.getElementById("error-alert");

    addEventListener("keypress", () => {
        error.innerHTML = "";
        emailContainer.style.border = "none"
        email.style.color = "#BCBDC2";
        personIcon.style.fill = "white";
        passwordContainer.style.border = "none"
        password.style.color = "#BCBDC2";
        keyIcon.style.fill = "white";
        openEyeIcon.style.fill = "white";
        closedEyeIcon.style.fill = "white";
    })
}

//Função para logar na conta
function login() {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const passwordContainer = document.getElementsByClassName("password-container")[0];
    const emailContainer = document.getElementsByClassName("email-container")[0];
    const personIcon = document.getElementById("icon-person");
    const keyIcon = document.getElementById("icon-key");
    const openEyeIcon = document.getElementById("icon-open-eye");
    const closedEyeIcon = document.getElementById("icon-closed-eye");
    let error = document.getElementById("error-alert");
    const padraoEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let emailEncontrado = false;


        //Validações simples
    if(email.value == "" && password.value == "") {
        error.innerHTML = "Insira os dados para fazer login";
        emailContainer.style.border = "1px solid rgb(225, 75, 75)";
        email.style.color = "rgb(225, 75, 75)";
        personIcon.style.fill = "rgb(225, 75, 75)";
        passwordContainer.style.border = "1px solid rgb(225, 75, 75)";
        password.style.color = "rgb(225, 75, 75)";
        keyIcon.style.fill = "rgb(225, 75, 75)";
        openEyeIcon.style.fill = "rgb(225, 75, 75)";
        closedEyeIcon.style.fill = "rgb(225, 75, 75)";
    }else if(email.value == "") {
        error.innerHTML = "Digite seu email";
        emailContainer.style.border = "1px solid rgb(225, 75, 75)";
        email.style.color = "rgb(225, 75, 75)";
        personIcon.style.fill = "rgb(225, 75, 75)";
    }else if(password.value == "") {
        error.innerHTML = "Digite sua senha";
        passwordContainer.style.border = "1px solid rgb(225, 75, 75)";
        password.style.color = "rgb(225, 75, 75)";
        keyIcon.style.fill = "rgb(225, 75, 75)";
        openEyeIcon.style.fill = "rgb(225, 75, 75)";
        closedEyeIcon.style.fill = "rgb(225, 75, 75)";
    }else if(!padraoEmail.test(email.value)) {
        emailContainer.style.border = "1px solid rgb(225, 75, 75)";
        email.classList.add("email-error");
        personIcon.style.fill = "rgb(225, 75, 75)";
        email.style.color = "rgb(225, 75, 75)";
        error.innerHTML = "* Insira um email válido! *"
    }else{
        //Verifica se o email está cadastrado
        fetch('/database/users')
        .then(res => res.json())
        .then(users => {
            for(i = 0; i < users.usuarios.length; i++) {
                if(users.usuarios[i].email == email.value){
                    emailEncontrado = true
                    //Email encontrado e senha correta
                    if(users.usuarios[i].senha == password.value){
                        alert("Logado")
                        //Programar bloco para que o usuário seja redirecionado para a página principal com sua conta logada
                    }
                    //Email encontrado, mas senha incorreta
                    else{
                        error.innerHTML = "Corriga sua senha";
                        passwordContainer.style.border = "1px solid rgb(225, 75, 75)";
                        password.style.color = "rgb(225, 75, 75)";
                        keyIcon.style.fill = "rgb(225, 75, 75)";
                        openEyeIcon.style.fill = "rgb(225, 75, 75)";
                        closedEyeIcon.style.fill = "rgb(225, 75, 75)";
                    }
                    break
                }
            }

            //Se o email não foi encontrado
            if(!emailEncontrado) {
                error.innerHTML = "Email não encontrado, crie uma conta.";
            }
        })
    }
}