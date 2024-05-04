import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../Todoitem/Todoitem';
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
            {loading && <p>Estamos cargando...</p>}
            {error && <p>Desesperate, hubo un error!!</p>}
            {(!loading && searchedTodos.length ==0) && <p>Crea tu primer TODO!</p>}
            
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