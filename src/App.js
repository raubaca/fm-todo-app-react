import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import Header from './components/Header';
import Form from './components/Form';
import Todos from './components/Todos';
import Footer from './components/Footer';

import { FILTERS } from './utils/constants';

function App() {
  const [theme, setTheme] = useState('light');
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const addTodoHandler = (text) => {
    const newTodo = {
      id: 'todo-' + nanoid(),
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setFilter('All');
  };

  const toggleTodoHandler = (id) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (id === todo.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const deleteTodoHandler = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const clearCompletedHandler = () => {
    setTodos((prev) => prev.filter(FILTERS['Active']));
    setFilter('All');
  };

  return (
    <div className="todo-app">
      <Header theme={theme} onToggleTheme={setTheme} />
      <Form onAddTodo={addTodoHandler} />
      <Todos
        todos={todos}
        filter={filter}
        onFilter={setFilter}
        onToggleTodo={toggleTodoHandler}
        onDeleteTodo={deleteTodoHandler}
        onClearCompleted={clearCompletedHandler}
      />
      <Footer />
    </div>
  );
}

export default App;
