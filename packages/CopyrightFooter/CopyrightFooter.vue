<template>
  <div :class="$style.CopyrightFooter">
    <div :class="$style.copyright">
      {{ companyName }}
      <i class="anticon anticon-copyright" />
      {{ new Date().getFullYear() }}
      版权所有 {{ productName }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CopyrightFooter',
  props: {
    companyName: {
      type: String,
      default: ''
    },
    productName: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" module>
@import "~ant-design-vue/lib/style/themes/default.less";

.CopyrightFooter {
  padding: 0 16px;
  margin: 48px 0 24px 0;
  text-align: center;

  .links {
    margin-bottom: 8px;

    a {
      color: @text-color-secondary;
      transition: all 0.3s;

      &:not(:last-child) {
        margin-right: 40px;
      }

      &:hover {
        color: @text-color;
      }
    }
  }

  .copyright {
    color: @text-color-secondary;
    font-size: @font-size-base;
  }
}
</style>
