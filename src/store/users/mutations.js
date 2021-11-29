export function FETCH_USERS_ALLOWED_SUCCESS (state, { usersAllowed }) {
  state.usersAllowed = usersAllowed
}

export function FETCH_GROUPS_MODERATING_SUCCESS (state, { groupsModerating }) {
  state.groupsModerating = groupsModerating
}
