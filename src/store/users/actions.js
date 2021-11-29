// actions

export async function fetchAllowedUsers ({ commit }) {
  try {
    const { data } = await axios.get('/api/users-allowed')
    commit('FETCH_USERS_ALLOWED_SUCCESS', { usersAllowed: data })
  } catch (e) {
    commit('FETCH_USERS_ALLOWED_FAILURE')
  }
}

export async function fetchGroupsModerating ({ commit }) {
  try {
    const { data } = await axios.get('/api/groups-moderating')
    commit('FETCH_GROUPS_MODERATING_SUCCESS', { groupsModerating: data })
  } catch (e) {
    commit('FETCH_GROUPS_MODERATING_FAILURE')
  }
}

export function addAllowedUserToGroup ({ commit }, payload) {
  axios.post('/api/add-user-to-group', payload)
}

export function removeAllowedUserFromGroup ({ commit }, payload) {
  axios.post('/api/remove-user-from-group', payload)
}

export function updateUsers ({ commit }, payload) {
  try {
    return axios.patch('/api/update-allowed-users', payload )
  } catch (e) {
    return e
  }
}

export function createUsers ({ commit }, payload) {
  try {
    return axios.post('/api/create-users', payload )
  } catch (e) {
    return e
  }
}

export function deleteUsers ({ commit }, payload) {
  try {
    return axios.patch('/api/delete-allowed-user', payload )
  } catch (e) {
    return e
  }
}
