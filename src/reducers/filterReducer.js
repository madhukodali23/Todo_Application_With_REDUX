const initialState = {
  filter: 'All',
  addingSample : "NONE"
}

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER': {
      return {
        ...state,
        filter: action.payload.filter,
      }
    }
    default:
      return state
  }
}
