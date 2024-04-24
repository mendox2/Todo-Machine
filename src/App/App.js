import React from 'react';
import { Appx } from './Appx';
import { useLocalStorage } from './useLocalStorage';
import '../Body.css';

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setsearchValue] = React.useState('');

  const completedTodos = todos.filter(
  todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;
  
  console.log("Los usuarios buscan TODOs de: "+searchValue)

  const searchedTodos = todos.filter(
    (todo) => {
      const todoTxt = todo.txt.toLocaleLowerCase();
      const searchTxt = searchValue.toLocaleLowerCase();
      return todoTxt.includes(searchTxt)
    }
  );

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
      <Appx
      completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setsearchValue={setsearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
      />
    );
}


export default App;
