import { mapState } from 'vuex'
import props from './props'
import Logo from './Logo'
import p from '../../utils/props'
import './index.less'

export default {
  name: 'SiderMenu',
  props,
  data: () => ({
    selectedKeys: [],
    routes: []
  }),
  computed: {
    ...mapState({
      user: state => state.user,
      collapsed: () => false
    })
  },
  watch: {
    $route () {
      this.updateDefaultKeys()
    }
  },
  mounted () {
    this.routes = this.$router.options.routes
    this.updateDefaultKeys()
  },
  methods: {
    updateDefaultKeys () {
      this.selectedKeys = [this.$route.name]
    },
    select (item) {
      this.$router.push({ name: item.key })
    },
    createMenuItems () {
      return this.routes
        .filter(route => !route.hidden)
        .map(route => {
          return route.children.length === 1
            ? this.createMenuItem(route.children[0])
            : this.createSubMenu(route)
        })
    },
    createMenuItem (route) {
      return (
        <a-menu-item key={route.name}>
          {route.meta.icon && <a-icon type={route.meta.icon} />}
          <span>{route.meta.title}</span>
        </a-menu-item>
      )
    },
    createSubMenu (route) {
      const menuItems = route.children.map(this.createMenuItem)

      return (
        <a-sub-menu key={route.name}>
          <span slot="title">
            {route.meta.icon && <a-icon type={route.meta.icon} />}
            <span>{route.meta.title}</span>
          </span>
          { menuItems}
        </a-sub-menu>
      )
    }
  },
  render () {
    const menuItems = this.createMenuItems()

    return (
      <a-layout-sider
        trigger={null}
        width={this.width}
        v-model={this.collapsed}
        class="sider"
        collapsible>
        <Logo {...p(this.logo)} />
        <a-menu
          selectedKeys={this.selectedKeys}
          theme="dark"
          mode="inline"
          onClick={this.select}>
          {menuItems}
        </a-menu>
      </a-layout-sider>
    )
  }
}
