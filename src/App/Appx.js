import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../Todoitem/Todoitem';
import { TodosLoading } from '../TodosLoading/Todosloading';
import { TodosError } from '../TodosError/TodosError';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton'
import { TodoContext } from '../TodoContext/TodoContext';

function Appx(){
    return (
        <>
          <TodoCounter />
          <TodoSearch />
    
          <TodoContext.Consumer>
            {({
              loading,
              error,
              completedTodos,
              totalTodos,
              searchValue,
              setsearchValue,
              searchedTodos,
              completeTodo,
              deleteTodo
            })=>(
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
            )}
          </TodoContext.Consumer>
    
          <CreateTodoButton/>
        </>
      );
}

export { Appx }