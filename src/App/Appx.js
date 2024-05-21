import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../Todoitem/Todoitem';
import { TodosLoading } from '../TodosLoading/Todosloading';
import { TodosError } from '../TodosError/TodosError';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton'
import { TodoContext } from '../TodoContext/TodoContext';
import React from 'react';
import { Modal } from '../Modal/Modal';
import { TodoForm } from '../TodoForm/TodoForm';


function Appx(){

  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

    return (
        <>
          <TodoCounter />

          <TodoSearch />         

          <CreateTodoButton 
          setOpenModal={setOpenModal}
          />

          <TodoList>
            {loading && <TodosLoading />}
            {error && <TodosError />}
            {(!loading && searchedTodos.length ===0) && <EmptyTodos />}
              
            {searchedTodos.map(todo =>(
            <TodoItem 
              key={todo.txt}
              txt={todo.txt}
              completed={todo.completed}
              onComplete={()=> completeTodo(todo.txt)}
              onDelete={()=> deleteTodo(todo.txt)}
            />
            ))}
          </TodoList>

          {openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )}
        </>
      );
}

export { Appx }