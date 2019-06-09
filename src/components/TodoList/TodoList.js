import React from 'react';
import Card from 'components/Card/Card';
import Todo from 'components/Todo/Todo';
import { consumeTodos } from 'contexts/TodosContext';
import './TodoList.scss';

const TodoList = ({
  todos,
  removeTodo,
  toggleComplete,
  onChange,
  onSubmit,
  value,
}) => (
  <div className="todo-list">
    <Card>
      { todos && todos.map(({ label, isComplete }, i) => (
        <Todo
          key={ `todo${ i }` }
          label={ label }
          isComplete={ isComplete }
          onRemove={ () => removeTodo(i) }
          toggleComplete={ () => toggleComplete(i) }
        />
      )) }
      <form onSubmit={ onSubmit }>
        <input
          type="text"
          onChange={ onChange }
          value={ value }
          placeholder="To do or not to do..."
        />
      </form>
    </Card>
  </div>
);

export default consumeTodos(TodoList);