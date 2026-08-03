const initialState = {
  todoList: [
    {
      text: 'Learn HTML',
      uniqueNo: 1,
      completed: false,
    },
    {
      text: 'Learn CSS',
      uniqueNo: 2,
      completed: false,
    },
    {
      text: 'Learn JavaScript',
      uniqueNo: 3,
      completed: false,
    },
  ],
}

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todoList: [...state.todoList, action.payload.todo],
      }
    case 'TOGGLE_TODO':
      const updatedTodo = state.todoList.map(eachTodo => {
        if (eachTodo.uniqueNo === action.payload.uniqueNo) {
          return {
            ...eachTodo,
            completed: !eachTodo.completed,
          }
        }
        return eachTodo
      })
      return {
        ...state,
        todoList: updatedTodo,
      }
    case 'DELETE_TODO': {
      const filteredTodo = state.todoList.filter(
        eachTodo => eachTodo.uniqueNo != action.payload.uniqueNo,
      )
      return {
        ...state,
        todoList: filteredTodo,
      }
    }
    default:
      // Return the existing state unchanged
      return state
  }
}
