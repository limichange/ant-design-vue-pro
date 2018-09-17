<script>
export default {
  name: 'Copyright',
  props: {
    companyName: {
      type: String,
      default: ''
    },
    productName: {
      type: String,
      default: ''
    }
  },
  render () {
    return (
      <div class={this.$style.Copyright}>
        { companyName }
        <i class="anticon anticon-copyright" />
        { new Date().getFullYear() }
        版权所有
        { productName }
      </div>
    )
  }
}
</script>

<style lang="less" module>
@import "~ant-design-vue/lib/style/themes/default.less";

.Copyright {
  padding: 0 16px;
  margin: 48px 0 24px 0;
  text-align: center;
  color: @text-color-secondary;
  font-size: @font-size-base;
}
</style>
