/*
    * h1 { color: red}
    * .parrafito { ... }
    * #pid { ... }
*/

const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btn = document.getElementById('btnCalcular');
const resultado = document.getElementById('resultado');

// form.addEventListener('submit', sumarInputValues);

// function sumarInputValues(e){
//     // console.log(e);
//     e.preventDefault();
//     let suma = parseInt(input1.value) + parseInt(input2.value);
//     resultado.innerText += suma;
// }

btn.addEventListener('click', sumarInputValues);

function sumarInputValues(e){
    // console.log(e);
    // e.preventDefault();
    let suma = parseInt(input1.value) + parseInt(input2.value);
    resultado.innerText += suma;
}