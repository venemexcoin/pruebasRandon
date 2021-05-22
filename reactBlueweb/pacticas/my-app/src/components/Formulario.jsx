import React,{ useState } from 'react'

const Formulario = () => {

    const [fruta, setFruta] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [lista, setLista] =useState([])

    const  guardarDatos = (e) => {
        e.preventDefault()
        
        if(!fruta.trim()){
            console.log('esta vacio')
            return
        }
        if(!descripcion.trim()){
            console.log('esta vacio')
            return
        }

        console.log('procesando datos...' + fruta + ' ' + descripcion)

        setLista([
            ...lista,
            {nombreFruta: fruta, nombreDescripcion: descripcion}
        ])

        e.target.reset()
    
    }

    return (
        <>
            <h2 className="text-center">Formulario</h2>
            <div className="row">
                <div className="col-md-8 offset-2">
                    <form onSubmit={ guardarDatos }>
                        <input 
                        type="text" 
                        placeholder="Ingrese furtas"
                        className="form-control mb-2"
                        onChange={e => setFruta(e.target.value)}
                        />

                        <input 
                        type="text" 
                        placeholder="Descripción"
                        className="form-control mb-2 "
                        onChange={e => setDescripcion( e.target.value )}
                        />

                        <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="submit">Agregar</button>
                        </div>
                    </form>

                    <div className="card mt-5">
                        <div className="card-header">
                            Frutas
                        </div>
                        <div className="card-body">
                            <ul>
                                {
                                    lista.map((item,index) => (
                                        <li key={index}>{item.nombreFruta} - {item.nombreDescripcion}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Formulario
