import Types from './Types';


let next_todo_id = 0;

export const addTodo = (text) => {
  return {
    type: Types.ADD_TODO,
    id: next_todo_id++,
    text,
  };
};

export const toggleTodo = (id) => {
  return {
    type: Types.TOGGLE_TODO,
    id,
  };
};
