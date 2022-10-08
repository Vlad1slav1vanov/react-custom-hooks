import Hover from './components/Hover';
import useInput from './hooks/useInput';
import List from './components/List';
import { useState } from 'react';
import useDebounce from './hooks/useDebounce';
import axios from 'axios';
import useRequest from './hooks/useRequest';

function App() {
  const [todos, loading, error] = useRequest(fetchTodos)

  function fetchTodos(query) {
    return axios.get('https://jsonplaceholder.typicode.com/todos?query='+query)
};

if (loading) {
  return (
    <h1>Loading</h1>
  )
}

if (error) {
  <h1>Error</h1>
}

  return (
    <div>
      {todos && todos.map(todo => 
        <div 
        key={todo.id} 
        style={{padding: 30, border: 'solid 2px black'}}>
        {todo.id}.  {todo.title}
      </div>
      )}
    </div>
  );
}

export default App;
