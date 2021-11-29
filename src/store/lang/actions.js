// actions
import Cookies from 'js-cookie'

export function setLocale({
  commit
}, {
  locale
}) {
  commit('SET_LOCALE', {
    locale
  })

  Cookies.set('locale', locale, {
    expires: 365
  })
}
