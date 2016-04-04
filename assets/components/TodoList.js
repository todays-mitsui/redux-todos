import React, { PropTypes } from 'react';
import Todo from './Todo';


const TodoList = ({ todos, onTodoClick }) => {
  const items = todos.map((todo) => {
    return (<Todo
      key={todo.id}
      onTodoClick={() => onTodoClick(todo.id)}
      {...todo}
    />);
  });

  return (<ul>{items}</ul>);
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};


export default TodoList;
