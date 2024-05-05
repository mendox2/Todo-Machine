import React from 'react';
import { Appx } from './Appx';
import '../Body.css';
import { TodoProvider } from '../TodoContext/TodoContext';

function App() {
    return(
      <TodoProvider>
        <Appx />
      </TodoProvider>
    );
}


export default App;
