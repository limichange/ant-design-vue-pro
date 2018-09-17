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
      this.routes.map(route => {
        console.log(route)
      })

      return <a-menu-item>name2</a-menu-item>
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
          // selectedKeys={this.selectedKeys}
          theme="dark"
          mode="inline"
          onClick={this.select}>
          {menuItems}
        </a-menu>
      </a-layout-sider>
    )
  }
}
/* <template>
      <template
        v-for="route in routes"
        v-if="!route.hidden">

        <a-menu-item
          :key="route.children[0].name"
          v-if="route.onePage">
          <a-icon :type="route.children[0].meta.icon" />
          <span>{{ route.children[0].meta.name }}</span>
        </a-menu-item>

        <a-menu-item
          v-else-if="!route.children"
          :key="route.name">
          <a-icon :type="route.meta.icon" />
          <span>{{ route.meta.name }}</span>
        </a-menu-item>

        <a-sub-menu
          v-else-if="!route.hidden"
          :key="route.name">
          <span slot="title">
            <a-icon :type="route.meta.icon" />
            <span>{{ route.meta.name }}</span>
          </span>
          <a-menu-item
            v-if="!routeChildren.hidden"
            v-for="routeChildren in route.children"
            :key="routeChildren.name">
            {{ routeChildren.meta.name }}
          </a-menu-item>
        </a-sub-menu>
      </template>

</template> */
