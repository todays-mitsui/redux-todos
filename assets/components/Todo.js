import React, { PropTypes } from 'react';


const Todo = ({ text, completed }) => (
  <li className={completed ? 'completed' : ''}>{text}</li>
);

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};


export default Todo;
