type actionType = {
  type: 'ADD' | 'DEL'
  zoom: number
}
export type StateType = number

const initialState: StateType = 1

export default (state = initialState, action: actionType) => {
  switch (action.type) {
    case 'ADD': {
      return state + 0.1
    }
    case 'DEL': {
      return state - 0.1
    }
    default: {
      return state
    }
  }
}
