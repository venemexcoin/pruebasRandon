import React, {useState} from 'react';
import shortid from 'shortid';

function App() {

  const [tarea, setTarea] = useState('')
   const [tareas, setTareas] = useState([])
   const [modoEdicion, setModoEdicion] = useState(false)
   const [id , setId] = useState('')
   const [error, setError] = useState(null)


   const agregarTarea = e => {
     e.preventDefault()
     if(!tarea.trim()){
       setError('Elemeto vacio')
       return
      }
      console.log(tarea)

      setTareas([
        ...tareas,
        {id: shortid.generate(), nombreTarea: tarea}
      ])

      setTarea('')
      setError(null)
   }

   const eliminarTarea = (id) => {
      //console.log(id)
      const arrayFiltrado = tareas.filter(item => item.id !== id)
      setTareas(arrayFiltrado)
   }

   const editar = item => {
     console.log(item)
     setModoEdicion(true)
     setTarea(item.nombreTarea)
     setId(item.id)
   }

   const editarTarea = (e) => {
     e.preventDefault()
     if(!tarea.trim()){
      setError('Elemeto vacio')
       return
     }

     const arrayEditado = tareas.map(item => item.id === id ? {id:id, nombreTarea: tarea} : item)
     
     setTareas(arrayEditado)
     setModoEdicion(false)
     setTarea('')
     setId('')
     setError(null)
   }


  return (
    <div className="container mt-5">
      <h1 className="text-center">CRUD Simple</h1>
      <hr />
      <div className="row">
        <div className="col-md-8">
          <h4 className="text-center">
            Lista de tarea
          </h4>
          <ul className="list-group">
              {
                tareas.length === 0 ? (
                  <li className="list-group-iten">
                    <h3>No hay tareas</h3>
                  </li>
                ) : (

                tareas.map(item => (

            <li className="list-group-item" key={item.id}>
              <span className="lead">
                {item.nombreTarea}
              </span>
              <button className="btn btn-danger btn-sm float-end mx-2"
              onClick={() => eliminarTarea(item.id)}
              >
                Eliminar
                </button>
              <button className="btn btn-warning btn-sm float-end"
              onClick={() => editar(item)}
              >
                Editar
                </button>
            </li>

                ))
                )
              }

          </ul>
        </div>
        <div className="col-md-4">
        <h4 className="text-center">
            {
              modoEdicion ? 'Editar Tareas' : 'Agregar Tareas'
            }
          </h4>
          <form onSubmit={modoEdicion ? editarTarea : agregarTarea}>
            {
              error ? <span className="text-danger">{error}</span> : null
            }
            <input 
              type="text" 
              className="form-control mb-2" 
              placeholder="Ingrese Tarea"
              onChange={ e => setTarea(e.target.value)}
              value={tarea}
              />
              {
                modoEdicion ? (

              <div className="d-grid gap-2">
                <button className="btn btn-warning" type="submit">Editar</button>
             </div>
                ) : (
                  <div className="d-grid gap-2">
                <button className="btn btn-dark" type="submit">ActualiZar</button>
             </div>
                )
              }
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
