import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../Todoitem/Todoitem';
import { TodosLoading } from '../TodosLoading/Todosloading';
import { TodosError } from '../TodosError/TodosError';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton'

function Appx({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setsearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}){
    return (
        <>
          <TodoCounter completed={completedTodos} total = {totalTodos}/>
          <TodoSearch 
            searchValue={searchValue}
            setsearchValue={setsearchValue}
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
    
          <CreateTodoButton/>
        </>
      );
}

export { Appx }