const formulario = document.getElementById('form')
const select = document.getElementById('selector')
const selects = document.querySelectorAll('#selector option')
const inputform = document.querySelectorAll('#form input')

const validarOption = (e) => {
    switch (e.target.value){
        case "selec":
            document.querySelector('.contenedor-active').classList.add('contenedor');
            document.querySelector('.contenedor').classList.remove('contenedor-active');
        break;
        case "JavaScript":
            document.querySelector('.contenedor').classList.add('contenedor-active');
            document.querySelector('.contenedor').classList.remove('contenedor');
        break;
        case "C#":
            console.log('C#');
        break;
        case "Java":
            console.log('Java');
        break;
        case "PHP":
            console.log('PHP');
        break;
        case "Python":
            console.log('Python');
        break;
    }
};

selects.forEach((option) => {
    option.addEventListener('click', validarOption);
    option.addEventListener('blur', validarOption);
})


const selector = document.getElementById('selec')

const seleccion = (lenguaje) => {
    if(lenguaje === 'selec'){
        document.getElementById('lblLenguajeSeleccinado').innerText = `Ud. no a seleccionado un lenguaje`
    }
}

function seleccionLenguaje() {
    let cbxLenguajes = document.getElementById('cbxLenguajes');
    let lenguaje = cbxLenguajes.value;

    document.getElementById('lblLenguajeSeleccinado').innerText = `Ud. ha seleccionado el lenguaje de lenguaje ${lenguaje}.`
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelector('.contenedor-active').classList.add('contenedor');
    document.querySelector('.contenedor').classList.remove('contenedor-active');
    document.querySelector('.exito-message').classList.add('exito-message-active');
    document.querySelector('.exito-message-active').classList.remove('exito-message');
});
