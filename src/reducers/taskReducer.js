const initialState = {
  tasks: []
};
export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.task] };
    case "REMOVE_TASK":
      return { ...state, tasks: state.tasks.filter(el => el.id !== action.id) };
    default:
      return state;
  }
};
