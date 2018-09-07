import GlobalHeader from '../GlobalHeader'

export default {
  data () {
    return {
      collapsed: false
    }
  },
  methods: {
    onCollapse (collapsed) {
      this.collapsed = collapsed
    }
  },
  render () {
    return (
      <GlobalHeader
        collapsed={this.collapsed}
        onCollapse={this.onCollapse} />
    )
  }
}
