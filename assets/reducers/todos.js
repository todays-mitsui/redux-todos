import Types from '../actions/Types';


const todo = (state, action) => {
  switch (action.type) {
    case Types.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false,
      }

    case Types.TOGGLE_TODO:
      if (state.id !== action.id) {
        
      }

    default:
      return state
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case Types.ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ];
    case Types.TOGGLE_TODO:
      return state.map((t) => todo(t, action));
    default:
      return state
  }
};


export default todos;
