//Função para ir para próxima página
function next() {
    const dataCamps1 = document.getElementsByClassName("data-camps1")[0];
    const dataCamps2 = document.getElementsByClassName("data-camps2")[0];
    const barProgress = document.getElementsByClassName("bar")[0];
    const btnNext = document.getElementById("btn-next");
    const btnCreateAccount = document.getElementById("btn-create-account");

    dataCamps1.style.animation = "exitDatasAnimation 1s linear forwards";
    btnNext.style.animation = "opacityOff 0.7s linear forwards";

    setTimeout(() => {
        btnNext.style.display = "none";
        btnCreateAccount.style.display = "block";
        btnCreateAccount.style.animation = "opacityOn 2s linear forwards";
    }, 700)
    
    setTimeout(() => {
        dataCamps1.style.display = "none";
        dataCamps2.style.display = "flex";
        dataCamps2.style.animation = "startDatasAnimation 0.8s linear forwards";
        barProgress.style.animation = "gradienteFluido 6s ease-in-out infinite alternate, barMove 1.5s linear forwards";
    }, 500)
}

//Função do botão para ir para próximos dados
function nextStep() {
    const name = document.getElementById("name");
    const nameContainer = document.getElementsByClassName("name-container")[0];
    const lastname = document.getElementById("lastname");
    const lastnameContainer = document.getElementsByClassName("lastname-container")[0];
    const error = document.getElementById("error");

    //Validação dos campos: Nome e Sobrenome
    if(name.value == "" && lastname.value == "") {
        nameContainer.style.border = "1px solid rgb(225, 75, 75)";
        name.classList.add("name-error");
        lastnameContainer.style.border = "1px solid rgb(225, 75, 75)";
        lastname.classList.add("lastname-error");
        error.innerHTML = "* Insira os dados para continuar *";
    }else if(name.value == "") {
        nameContainer.style.border = "1px solid rgb(225, 75, 75)";
        name.classList.add("name-error");
        error.innerHTML = "* Insira seu nome *"
    }else if(lastname.value == "") {
        lastnameContainer.style.border = "1px solid rgb(225, 75, 75)";
        lastname.classList.add("lastname-error");
        error.innerHTML = "* insira seu sobrenome *"
    }
    //Redireciona o usuário para a próxima página de dados, se todos os requisitos forem validados
    else {
        next()
    }
}

//Funções para retornar o estilo original dos campos quando houver digitação
function clickName() {
    const name = document.getElementById("name");
    const nameContainer = document.getElementsByClassName("name-container")[0];
    const lastname = document.getElementById("lastname");
    const lastnameContainer = document.getElementsByClassName("lastname-container")[0];
    const error = document.getElementById("error");

    addEventListener("keypress", () => {
        nameContainer.style.border = "none";
        name.classList.remove("name-error");
        name.classList.add("name-placeholder");
        lastnameContainer.style.border = "none";
        lastname.classList.remove("lastname-error");
        lastname.classList.add("lastname-placeholder");
        error.innerHTML = "";
    })
}

function clickLastname() {
    const name = document.getElementById("name");
    const nameContainer = document.getElementsByClassName("name-container")[0];
    const lastname = document.getElementById("lastname");
    const lastnameContainer = document.getElementsByClassName("lastname-container")[0];
    const error = document.getElementById("error");

    addEventListener("keypress", () => {
        nameContainer.style.border = "none";
        name.classList.remove("name-error");
        name.classList.add("name-placeholder");
        lastnameContainer.style.border = "none";
        lastname.classList.remove("lastname-error");
        lastname.classList.add("lastname-placeholder");
        error.innerHTML = "";
    })
}

function clickEmail() {
    const email = document.getElementById("email");
    const emailContainer = document.getElementsByClassName("email-container")[0];
    const password = document.getElementById("password");
    const passwordContainer = document.getElementsByClassName("password-container")[0];
    const personIcon = document.getElementById("icon-person");
    const keyIcon = document.getElementById("icon-key");
    const openEyeIcon = document.getElementById("icon-open-eye");
    const closedEyeIcon = document.getElementById("icon-closed-eye");
    const error = document.getElementById("error");

    addEventListener("keypress", () => {
        error.innerHTML = "";
        emailContainer.style.border = "none";
        email.style.color = "#BCBDC2";
        email.classList.remove("email-error");
        email.classList.add("email-placeholder");
        personIcon.style.fill = "white";
        passwordContainer.style.border = "none";
        password.style.color = "#BCBDC2";
        password.classList.remove("password-error");
        password.classList.add("password-placeholder");
        keyIcon.style.fill = "white";
        openEyeIcon.style.fill = "white";
        closedEyeIcon.style.fill = "white";
    })
}

function clickPassword() {
    const email = document.getElementById("email");
    const emailContainer = document.getElementsByClassName("email-container")[0];
    const password = document.getElementById("password");
    const passwordContainer = document.getElementsByClassName("password-container")[0];
    const personIcon = document.getElementById("icon-person");
    const keyIcon = document.getElementById("icon-key");
    const openEyeIcon = document.getElementById("icon-open-eye");
    const closedEyeIcon = document.getElementById("icon-closed-eye");
    const error = document.getElementById("error");

    addEventListener("keypress", () => {
        error.innerHTML = "";
        emailContainer.style.border = "none";
        email.style.color = "#BCBDC2";
        email.classList.remove("email-error");
        email.classList.add("email-placeholder");
        personIcon.style.fill = "white";
        passwordContainer.style.border = "none";
        password.style.color = "#BCBDC2";
        password.classList.remove("password-error");
        password.classList.add("password-placeholder");
        keyIcon.style.fill = "white";
        openEyeIcon.style.fill = "white";
        closedEyeIcon.style.fill = "white";
    })
}

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

//Função para criar conta
function createAccount() {
    const email = document.getElementById("email");
    const emailContainer = document.getElementsByClassName("email-container")[0];
    const password = document.getElementById("password");
    const passwordContainer = document.getElementsByClassName("password-container")[0];
    const personIcon = document.getElementById("icon-person");
    const keyIcon = document.getElementById("icon-key");
    const openEyeIcon = document.getElementById("icon-open-eye");
    const closedEyeIcon = document.getElementById("icon-closed-eye");
    const error = document.getElementById("error");
    const padraoEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const name = document.getElementById("name");
    const lastname = document.getElementById("lastname");
    let emailEncontrado = false

    if(email.value == "" && password.value == "") {
        emailContainer.style.border = "1px solid rgb(225, 75, 75)";
        email.classList.add("email-error");
        personIcon.style.fill = "rgb(225, 75, 75)";
        passwordContainer.style.border = "1px solid rgb(225, 75, 75)";
        password.classList.add("password-error");
        keyIcon.style.fill = "rgb(225, 75, 75)";
        openEyeIcon.style.fill = "rgb(225, 75, 75)";
        closedEyeIcon.style.fill = "rgb(225, 75, 75)";
        error.innerHTML = "* Insira os dados para continuar *";
    }else if(email.value == "") {
        emailContainer.style.border = "1px solid rgb(225, 75, 75)";
        email.classList.add("email-error");
        personIcon.style.fill = "rgb(225, 75, 75)";
        email.style.color = "rgb(225, 75, 75)";
        error.innerHTML = "* Digite seu email *"
    }else if(password.value == "") {
        passwordContainer.style.border = "1px solid rgb(225, 75, 75)";
        password.classList.add("password-error");
        password.style.color = "rgb(225, 75, 75)";
        keyIcon.style.fill = "rgb(225, 75, 75)";
        openEyeIcon.style.fill = "rgb(225, 75, 75)";
        closedEyeIcon.style.fill = "rgb(225, 75, 75)";
        error.innerHTML = "* Crie uma senha *";
    }else if(!padraoEmail.test(email.value)) {
        emailContainer.style.border = "1px solid rgb(225, 75, 75)";
        email.classList.add("email-error");
        personIcon.style.fill = "rgb(225, 75, 75)";
        email.style.color = "rgb(225, 75, 75)";
        error.innerHTML = "* Insira um email válido! *"
    }
    else {
        //Verifica se o email inserido ja está cadastrado
        fetch('/database/users')
        .then(res => res.json())
        .then(users => {
            for(i = 0; i < users.usuarios.length; i++) {
                //Se o email foi encontrado
                if(users.usuarios[i].email == email.value){
                    emailEncontrado = true
                    error.innerHTML = "* Email já cadastrado *"
                    break
                }
            } 
            //Se o email não foi encontrado
            if(!emailEncontrado) {
                //Cadastrar dados em users.JSON e redirecionar o usuário para a página de login
                fetch(`/newuser?name=${name.value}&lastname=${lastname.value}&email=${email.value}&password=${password.value}&id=${users.usuarios.length + 1}`);
            }
        })
    }
}