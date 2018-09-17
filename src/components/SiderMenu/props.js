import VueTypes from 'vue-types'

export default {
  width: VueTypes.number.def(200),
  logoSrc: VueTypes.string.def(''),
  title: VueTypes.string.isRequired.def('')
}
