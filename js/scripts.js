const btPlus = document.querySelector('.plus');

const colTransport = document.querySelector('.conteneur-transport');

btPlus.addEventListener('click', ouvreferme);

function ouvreferme(){
    console.log("coucou");
    colTransport.classList.toggle('conteneur-transport-invisible');
    console.log(colTransport.classList);
}