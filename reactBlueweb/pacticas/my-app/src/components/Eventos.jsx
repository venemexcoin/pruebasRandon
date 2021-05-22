import React, { Fragment, useState } from 'react'

const Eventos = () => {

    const [texto, setTexto] = useState('texto desde estado')

    const eventoClick = () => {
        console.log('me diste un click')
        setTexto('cambiando el texto...')
    }

    return (
            <Fragment>
            <hr />
            <h2>{texto}</h2>
            <button onClick={ () => eventoClick()}>click</button>
            <hr />
            </Fragment>
    )
}

export default Eventos

