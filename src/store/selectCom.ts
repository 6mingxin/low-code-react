import { componentsType } from '@/type'

export type selectComType = { type: 'SELECT_CHANGE' }
export interface selectComActionType extends selectComType {
  component: componentsType | {}
  index: number
}
export interface StateType {
  component: componentsType | { [key: string]: string }
  index: number
}

const initialState: StateType = {
  component: {},
  index: 0,
}

export default (state = initialState, action: selectComActionType) => {
  switch (action.type) {
    case 'SELECT_CHANGE': {
      return {
        component: action.component,
        index: action.index,
      }
    }
    default: {
      return state
    }
  }
}
