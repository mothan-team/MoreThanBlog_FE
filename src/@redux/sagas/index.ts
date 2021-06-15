import { all } from "redux-saga/effects";

import watchIncrementAsync from "./counterSaga";

export default function* root() {
  yield all([watchIncrementAsync()]);
}
