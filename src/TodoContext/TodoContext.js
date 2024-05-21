import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }){

    const {item: todos,
        saveItem: saveTodos,
          loading,
          error,
      } = useLocalStorage('TODOS_V1', []);
      const [searchValue, setsearchValue] = React.useState('');

      const [openModal, setOpenModal] = React.useState(false); 
    
      const completedTodos = todos.filter(
      todo => !!todo.completed
      ).length;
      const totalTodos = todos.length;
      
      // console.log("Los usuarios buscan TODOs de: "+searchValue)
    
      const searchedTodos = todos.filter(
        (todo) => {
          const todoTxt = todo.txt.toLocaleLowerCase();
          const searchTxt = searchValue.toLocaleLowerCase();
          return todoTxt.includes(searchTxt)
        }
      );

        const addTodo = (txt) => {
          const newTodos = [...todos];
          newTodos.push({
            txt,
            completed: false,
          });
          saveTodos(newTodos);
        };
    
        const completeTodo = (txt) => {
          const newTodos = [...todos];
          const todoIndex = newTodos.findIndex(
            (todo) => todo.txt === txt
          );
          newTodos[todoIndex].completed = true;
          saveTodos(newTodos);
        }
    
        const deleteTodo = (txt) => {
          const newTodos = [...todos];
          const todoIndex = newTodos.findIndex(
            (todo) => todo.txt === txt
          );
          newTodos.splice(todoIndex, 1);
          saveTodos(newTodos);
        }

    return(
        <TodoContext.Provider value = {{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setsearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {children}
        </TodoContext.Provider>
    );
}


export { TodoContext, TodoProvider }