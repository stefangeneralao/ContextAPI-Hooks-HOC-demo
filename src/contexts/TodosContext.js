import React, { createContext, useState, useEffect, useRef } from 'react';
import contextHOC from 'utils/contextHOC';

const TodosContext = createContext();

const initialTodos = JSON.parse(localStorage.getItem('todos')) || [];

const TodosProvider = ({ children }) => {
  const [ todos, setTodos ] = useState(initialTodos);
  const [ value, setValue ] = useState('');
  const isInitialMount = useRef(true);

  const removeTodo = index => {
    const newTodos = [ ...todos ];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const toggleComplete = index => {
    const newTodos = [ ...todos ];
    newTodos[index].isComplete = !newTodos[index].isComplete;
    setTodos(newTodos);
  }

  const addTodo = label => {
    const newTodo = { label, isComplete: false };
    setTodos([ ...todos, newTodo ]);
  }

  const onChange = e => {
    setValue(e.target.value);
  }

  const onSubmit = e => {
    e.preventDefault();
    addTodo(value);
    clearValue();
  }

  const clearValue = () => {
    setValue('');
  }

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [ todos ]);

  return (
    <TodosContext.Provider
      value={ {
        todos,
        removeTodo,
        toggleComplete,
        onSubmit,
        onChange,
        value,
      } }
    >
      { children }
    </TodosContext.Provider>
  );
};

const TodosConsumer = TodosContext.Consumer;

export const [
  provideTodos,
  consumeTodos,
] = contextHOC(TodosProvider, TodosConsumer);