export function someGetter (/* state */) {
}

export function user (state) {
  return state.user
} 

export function token(state) {
  return state.token
}

export function check(state) {
  return state.user !== null
}
