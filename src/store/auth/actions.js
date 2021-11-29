// actions
import axios from 'axios'

export function saveToken({
  commit,
  dispatch
}, payload) {
  commit('SAVE_TOKEN', payload)
}

export async function fetchUser({
  commit
}) {
  // Try fetching the User
  try {
    const {
      data
    } = await axios.get('/api/user')
    commit('FETCH_USER_SUCCESS', {
      user: data
    })
  } catch (e) {
    console.log('err fetching user!')
    commit('FETCH_USER_FAILURE')
  }
}

export function updateUser({
  commit
}, payload) {
  commit('UPDATE_USER', payload)
}

export async function logout({
  commit
}) {
  try {
    await axios.post(this.apiUrl('/api/logout'))
  } catch (e) {
    // 
  }

  commit('LOGOUT')
}

export async function fetchOauthUrl(ctx, {
  provider
}) {
  const {
    data
  } = await axios.post(`/api/oauth/${provider}`)

  return data.url
}
