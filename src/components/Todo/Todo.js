import React from 'react';
import './Todo.scss';

const Todo = ({ label, isComplete, toggleComplete, onRemove }) => (
  <div className='todo'>
    <p
      className={`label${ isComplete ? ' line-through' : '' }`}
      onClick={ toggleComplete }
    >
      { label }
    </p>
    <p className="remove-button" onClick={ onRemove }>X</p>
  </div>
);

export default Todo;