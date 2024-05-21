import React from 'react'
import './TodoForm.css';
import { TodoContext } from '../TodoContext/TodoContext';

function TodoForm (){

    const {
        setOpenModal,
        addTodo,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

   const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel =  () => {
        setOpenModal(false);
    } 

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    } 

  return (
    <form className='fCont' onSubmit={onSubmit}>
        <label className='label'>Escrite tu nuevo TODO</label>
        <textarea className='txtar'
        placeholder='Cortar cebolla pal almuerzo'
        value={newTodoValue}
        onChange={onChange}/>
        <div className='btns'>
            <button 
            type="button"
            className='tbtn-form tbtn-form--cancel'
            onClick={onCancel}>
                Cancelar
            </button>
            <button 
            type="submit"
            className='tbtn-form tbtn-form--accept'
            onSubmit={onSubmit}>
                Aceptar
            </button>
        </div>
    </form>
)
}

export { TodoForm };