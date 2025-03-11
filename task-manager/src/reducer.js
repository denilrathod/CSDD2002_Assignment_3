export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        { id: Date.now(), title: action.payload.title, description: action.payload.description, completed: false }
      ];

    case "DELETE_TASK":
      return state.filter(task => task.id !== action.payload.id);

    case "TOGGLE_COMPLETE":
      return state.map(task =>
        task.id === action.payload.id ? { ...task, completed: !task.completed } : task
      );

    case "UPDATE_TASK":
      return state.map(task =>
        task.id === action.payload.id
          ? { ...task, title: action.payload.title, description: action.payload.description }
          : task
      );

    default:
      return state;
  }
};
