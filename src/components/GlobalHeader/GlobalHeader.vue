<template>
  <div :class="$style.GlobalHeader">
    <a-icon
      :class="$style.trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="toggleSideBar"
    />
    <div :class="$style.right">
      <a-dropdown>
        <div :class="$style.action">
          <div :class="$style.account">
            <a-avatar
              :class="$style.avatar"
              size="small"
              icon="user" />
            <span>{{ userInfo.userName }}</span>
          </div>
        </div>
        <a-menu slot="overlay">
          <a-menu-item>
            <span @click="logout">退出登录</span>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalHeader',
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      userInfo: {
        userName: '用户名称'
      }
    }
  },
  methods: {
    toggleSideBar () {
      this.$emit('collapse', !this.collapsed)
      this.triggerResizeEvent()
    },
    triggerResizeEvent () {},
    logout () {
    }
  }
}
</script>

<style>
.ant-layout {
  min-height: 100vh;
  overflow-x: hidden;
}
</style>

<style lang="less" module>
@import "~ant-design-vue/lib/style/themes/default.less";

.GlobalHeader {
  height: 64px;
  padding: 0 12px 0 0;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  position: relative;
}

.trigger {
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s, padding 0s;
  text-align: center;
  width: 64px;
  height: 64px;
  line-height: 64px;

  &:hover {
    background: @primary-1;
  }
}

.right {
  float: right;
  height: 100%;
  .action {
    cursor: pointer;
    padding: 0 12px;
    display: inline-block;
    transition: all 0.3s;
    height: 100%;
    > i {
      font-size: 16px;
      vertical-align: middle;
      color: @text-color;
    }
    &:hover,
    &:global(.ant-popover-open) {
      background: @primary-1;
    }
  }
  .search {
    padding: 0;
    margin: 0 12px;
    &:hover {
      background: transparent;
    }
  }
  .account {
    .avatar {
      margin: 20px 8px 20px 0;
      vertical-align: middle;
    }
  }
}
</style>
