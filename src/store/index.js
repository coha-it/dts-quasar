import {
  createStore
} from 'vuex'
import {
  store
} from 'quasar/wrappers'


// Load store modules dynamically.
const requireContext = require.context('./modules', false, /.*\.js$/)

const modules = requireContext.keys()
  .map(file => [file.replace(/(^.\/)|(\.js$)/g, ''), requireContext(file)])
  .reduce((modules, [name, module]) => {
    if (module.namespaced === undefined) {
      module.namespaced = true
    }

    return {
      ...modules,
      [name]: module
    }
  }, {})

export default store(function ( /* { ssrContext } */ ) {
  const Store = createStore({
    modules,

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
