import VueTypes from 'vue-types'

const logo = {
  src: VueTypes.string.def(''),
  title: VueTypes.string.isRequired.def('')
}

export default {
  width: VueTypes.number.def(200),
  logo
}
