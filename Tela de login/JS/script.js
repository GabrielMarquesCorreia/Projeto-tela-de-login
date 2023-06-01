let email = 'gabrielmarquescorreia4@gmail.com'

console.log("Olá Mundo!");
console.log("Seu email é: " + email);

document.getElementById('butao').addEventListener('click', e => {
    console.log("Butao clicado");
});

document.getElementById('h1').addEventListener('mouseenter', e => {
    console.log("Música Lofi");
});

document.querySelector('#img').addEventListener('mouseleave', e => {
    console.log("Mouse fora");
});

document.querySelector("#form").addEventListener('submit', e => {

    e.preventDefault();

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#input').value;

    console.log(email, password);

    let json = {
        email,
        password
    };

    console.log(json);

    let stringJSON = JSON.stringify(json);

    console.log(stringJSON);

    let jsonParse = JSON.parse(stringJSON);

    console.log(jsonParse);

    if (!json.email) {
        console.error("O campo precisa ser preenchido!");
    } else if (!json.password){
        console.error("O campo precisa ser preenchido!");
    } else {
        console.log("Dados validos");
    }
});