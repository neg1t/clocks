const initialState = {
  utc: 
    {
      left: 'default',
      right: 'default'
    }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CHANGE_UTC_LEFT': {
      return {
        ...state,
        utc: {
          right: state.utc.right,
          left: action.leftNewUtc
        }
      }
    }
    case 'CHANGE_UTC_RIGHT': {
      return {
        ...state,
        utc: {
          right: action.leftNewUtc,
          left: state.utc.left
        }
      }
    }
    default: {
      return state
    }
  }
}

export default reducer;