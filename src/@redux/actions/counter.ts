import { createAction } from 'utils/actionFactory'

export namespace CounterAction {
  export const increment = createAction<'INCREMENT'>('INCREMENT')
  export const decrement = createAction<'DECREMENT'>('DECREMENT')
  export const incrementByValue =
    createAction<'INCREMENT_BY_VALUE', number>('INCREMENT_BY_VALUE')

  export type IAction = ReturnType<
    typeof increment | typeof incrementByValue | typeof decrement
  >
}
