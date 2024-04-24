import React from 'react';

function useLocalStorage(ItemName, initialValue){
  
    const localStorageItem = localStorage.getItem(ItemName);
  
    let parsedItem;
    
    if(!localStorageItem){
      localStorage.setItem(ItemName, JSON.stringify(initialValue))
      parsedItem = [];
    }else{
      parsedItem = JSON.parse(localStorageItem);
    }
  
    const [item, setItem] = React.useState(parsedItem);
  
    const saveItem = (newItem)=>{
      localStorage.setItem(ItemName, JSON.stringify(newItem));
      setItem(newItem);
    };
    return [item, saveItem];
  }

export { useLocalStorage }