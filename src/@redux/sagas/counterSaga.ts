import { delay, put, takeEvery } from 'redux-saga/effects'
import { CounterAction } from '@redux/actions/counter'

export function* incrementAsync() {
  yield delay(400)
  yield put(CounterAction.decrement())
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT', incrementAsync)
}

export default watchIncrementAsync
