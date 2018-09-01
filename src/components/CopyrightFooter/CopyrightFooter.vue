<template>
  <div :class="$style.CopyrightFooter">
    {{ companyName }}
    <i class="anticon anticon-copyright" />
    {{ new Date().getFullYear() }}
    版权所有 {{ productName }}
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
  color: @text-color-secondary;
  font-size: @font-size-base;
}
</style>
