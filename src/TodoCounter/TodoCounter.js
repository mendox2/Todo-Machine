import './TodoCounter.css';

function TodoCounter({total, completed}) {
    return(

            total === completed ?
            <h1 className='conter'>Felicitaciones, completaste todos los TODOs</h1>
            
            :

            <h1 className='conter'>
            Has completado <span>{completed}</span> de <span>{total}</span> TODOs
            </h1>
    );
}

export {TodoCounter}