import React, { PropTypes } from 'react';


const Todo = ({ text, completed, onTodoClick }) => {
  return (
    <li className={completed ? 'completed' : ''}>
      <input type="checkbox" onChange={onTodoClick} />
      {text}
    </li>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};


export default Todo;
