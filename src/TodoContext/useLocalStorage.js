import React from 'react';

function useLocalStorage(ItemName, initialValue){
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

    React.useEffect(()=>{
      setTimeout(()=>{
        try {
          const localStorageItem = localStorage.getItem(ItemName);
    
          let parsedItem;
  
          if(!localStorageItem){
          localStorage.setItem(ItemName, JSON.stringify(initialValue))
          parsedItem = [];
          } else  {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
          }
  
          setLoading(false);
        } catch(error)  {
          setLoading(false);
          setError(true);
        }
      }, 2000);
    }, []);
  
    const saveItem = (newItem)=>{
      localStorage.setItem(ItemName, JSON.stringify(newItem));
      setItem(newItem);
    };

    return {item,
      saveItem,
      loading,
      error
    };
  }

export { useLocalStorage }

// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: 
//   true },
//   {text: 'Tomar el curso de react', completed: 
//   false },
//   {text: 'Llorar con la llorona', completed: 
//   false },
//   {text: 'LALALALALA', completed: 
//   false },
//   {text: 'Usar TODOS derivados', completed: 
//   true }
// ];
// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos)) 