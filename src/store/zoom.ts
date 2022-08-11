import { keepTwoDecimal } from '@/common/utils'

export type zoomType = { type: 'INCREASE' | 'REDUCE' }
interface zoomActionType extends zoomType {
  zoom: number
}
export type StateType = number

const initialState: StateType = 0.9

export default (state = initialState, action: zoomActionType) => {
  switch (action.type) {
    case 'INCREASE': {
      if (state >= 1) return state
      return keepTwoDecimal(state + 0.1)
    }
    case 'REDUCE': {
      if (state <= 0.1) return state
      return keepTwoDecimal(state - 0.1)
    }
    default: {
      return state
    }
  }
}
