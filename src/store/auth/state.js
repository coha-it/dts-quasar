import Cookies from 'js-cookie'

export default function () {
  return {
    user: null,
    token: Cookies.get('token')
  }
}
