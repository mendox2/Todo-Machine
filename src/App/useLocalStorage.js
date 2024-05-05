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