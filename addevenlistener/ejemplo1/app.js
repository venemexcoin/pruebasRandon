
const selector = document.getElementById('selec')

const seleccion = (lenguaje) => {
    if(lenguaje === 'selec'){
        document.getElementById('lblLenguajeSeleccinado').innerText = `Ud. no a seleccionado un lenguaje`
    }
}



const validar = () => {
    document.querySelector('.contenedor').classList.add('contenedor-active')
    document.querySelector('.contenedor').classList.remove('contenedor')
}


function seleccionLenguaje() {
    let cbxLenguajes = document.getElementById('cbxLenguajes');
    let lenguaje = cbxLenguajes.value;

    document.getElementById('lblLenguajeSeleccinado').innerText = `Ud. ha seleccionado el lenguaje de lenguaje ${lenguaje}.`
    
    validar()
    seleccion(lenguaje)
}
