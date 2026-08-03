export const addTodo = todo => {
  return {
    type: 'ADD_TODO',
    payload: {todo: todo},
  }
}

export const toggleTodo = uniqueNo => {
  return {
    type: 'TOGGLE_TODO',
    payload: {
      uniqueNo,
    },
  }
}

export const setFilter = filter => {
  return {
    type: 'SET_FILTER',
    payload: {filter},
  }
}

export const deleteTodo = uniqueNo => {
  return {
    type: 'DELETE_TODO',
    payload: {
      uniqueNo,
    },
  }
}
