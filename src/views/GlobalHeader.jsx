import GlobalHeader from '../components/GlobalHeader'

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
      <div>
        <GlobalHeader
          collapsed={this.collapsed}
          onCollapse={this.onCollapse} />
      </div>
    )
  }
}
