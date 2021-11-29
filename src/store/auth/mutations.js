import Cookies from 'js-cookie'

export function SAVE_TOKEN(state, {
  token,
  remember
}) {
  state.token = token
  Cookies.set('token', token, {
    expires: remember ? 365 : null
  })
}

export function FETCH_USER_SUCCESS(state, {
  user
}) {
  state.user = user
}

export function FETCH_USER_FAILURE(state) {
  state.token = null
  Cookies.remove('token')
}

export function LOGOUT(state) {
  state.user = null
  state.token = null

  Cookies.remove('token')
}

export function UPDATE_USER(state, {
  user
}) {
  state.user = user
}
