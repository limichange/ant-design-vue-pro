<!--
<template>


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

</template>
-->
<script>
import { mapState } from 'vuex'
import props from './props'
import Logo from './Logo'

export default {
  name: 'SiderMenu',
  props,
  data () {
    return {
      selectedKeys: [],
      routes: []
    }
  },
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
    }
  },
  render () {
    return (
      <a-layout-sider
        trigger="null"
        width={this.width}
        v-model={this.collapsed}
        class="sider"
        collapsible>
        <Logo {...this.logo} />
        <a-menu
          // selectedKeys={this.selectedKeys}
          theme="dark"
          mode="inline"
          onClick={this.select}>
          <a-menu-item>name</a-menu-item>
        </a-menu>
      </a-layout-sider>
    )
  }
}
</script>

<style lang="less" scoped>
@ease-in-out: cubic-bezier(0.645, 0.045, 0.355, 1);
@ease-in-out-circ: cubic-bezier(0.78, 0.14, 0.15, 0.86);

.sider {
  min-height: 100vh;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  position: relative;
  z-index: 10;
}

.icon {
  width: 14px;
  margin-right: 10px;
}

:global {
  .drawer .drawer-content {
    background: #001529;
  }
  .ant-menu-inline-collapsed {
    & > .ant-menu-item .sider-menu-item-img + span,
    &
      > .ant-menu-item-group
      > .ant-menu-item-group-list
      > .ant-menu-item
      .sider-menu-item-img
      + span,
    & > .ant-menu-submenu > .ant-menu-submenu-title .sider-menu-item-img + span {
      max-width: 0;
      display: inline-block;
      opacity: 0;
    }
  }
  .ant-menu-item .sider-menu-item-img + span,
  .ant-menu-submenu-title .sider-menu-item-img + span {
    transition: opacity 0.3s @ease-in-out, width 0.3s @ease-in-out;
    opacity: 1;
  }
}
</style>
