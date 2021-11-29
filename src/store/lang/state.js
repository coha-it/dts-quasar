import Cookies from 'js-cookie'
const { locale, locales } = window.config

export default function () {
  return {
    locale: Cookies.get('locale') || locale,
    locales: locales
  }
}
