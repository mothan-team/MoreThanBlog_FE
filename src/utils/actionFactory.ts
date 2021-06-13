/**
 * create actionCreator function. You need to provide type T for type and P for payload.
 * @param type
 * @returns actionCreator function
 */
export function createAction<T, P = void>(type: T) {
  return (payload: P) => {
    return { type, payload }
  }
}
