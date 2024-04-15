import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './Todoitem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';
import './index.css';

//const defaultTodos = [
//  {txt: 'cortar cebolla', completed: false},
//  {txt: 'Tomar el curso de Intro a React.js', completed: false},
//  {txt: 'Llorar con la llorona', completed: false},
//  {txt: 'Encontrar a mi papá', completed: false}
//];

//localStorage.setItem('TODOS_v1', JSON.stringify(defaultTodos));
//localStorage.removeItem('TODOS_V1');

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');

  let parsedTodos;
  
  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]))
    parsedTodos = [];
  }else{
    parsedTodos = JSON.parse(localStorageTodos);
  }

  

  const [todos, setTodos] = React.useState(parsedTodos);
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

  const saveTodos = (newTodos)=>{
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
    
    setTodos(newTodos);
  };

    const completeTodo = (txt) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.txt == txt
      );
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
    }

    const deleteTodo = (txt) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.txt == txt
      );
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    }


  return (
    <>
      <TodoCounter completed={completedTodos} total = {totalTodos}/>
      <TodoSearch 
        searchValue={searchValue}
        setsearchValue={setsearchValue}
      />

      
      <TodoList>
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

      <CreateTodoButton/>
    </>
  );
}


export default App;
