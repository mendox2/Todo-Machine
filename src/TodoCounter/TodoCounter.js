import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext/TodoContext';

function TodoCounter() {

    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext);

    return(
            totalTodos === completedTodos 
            
            ? <h1 className='conter'>
                No tienes TODOs por hacer 
              </h1>

            : <h1 className='conter'>
                Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
              </h1>
    );
}

export {TodoCounter}