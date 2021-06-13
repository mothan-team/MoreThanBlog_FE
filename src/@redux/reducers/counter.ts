import produce from 'immer'
import { CounterAction } from '../actions'
interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

const counterReducer = produce(
  (draft: CounterState, action: CounterAction.IAction) => {
    switch (action.type) {
      case 'INCREMENT':
        draft.value += 1
        break
      case 'INCREMENT_BY_VALUE':
        draft.value += action.payload
        break
      case 'DECREMENT':
        draft.value -= 1
        break
      default:
        return draft
    }
  },
  initialState
)

export default counterReducer
