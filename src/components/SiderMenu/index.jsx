import props from './props'
import Logo from './Logo'
import p from '../../utils/props'
import './index.less'

export default {
  name: 'SiderMenu',
  props,
  data: () => ({
    selectedKeys: [],
    routes: [],
    collapsed: false,
    user: () => { }
  }),
  watch: {
    $route: {
      handler: 'updateDefaultKeys',
      immediate: true
    }
  },
  mounted () {
    this.routes = this.$router.options.routes

    this.$proBus.$on('GlobalHeaderCollapse', collapsed => {
      this.collapsed = collapsed
    })
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
          {this.createIcon(route)}
          {this.createTitle(route)}
        </a-menu-item>
      )
    },
    createIcon (route) {
      return route.meta.icon && <a-icon type={route.meta.icon} />
    },
    createTitle (route) {
      return <span>{route.meta.title}</span>
    },
    createSubMenu (route) {
      const menuItems = route.children
        .filter(route => !route.hidden)
        .map(this.createMenuItem)
      const icon = this.createIcon(route)

      return (
        <a-sub-menu key={route.name}>
          <span slot="title">
            {icon}
            {this.createTitle(route)}
          </span>
          {menuItems}
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
        collapsed={this.collapsed}
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
