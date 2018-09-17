<script>
import VueTypes from 'vue-types'

export default {
  name: 'Copyright',
  props: {
    companyName: VueTypes.string.def(''),
    productName: VueTypes.string.def('')
  },
  render () {
    return (
      <div class={this.$style.Copyright}>
        { this.companyName }
        <i
          style="margin: 0 5px;"
          class="anticon anticon-copyright" />
        { new Date().getFullYear() }
        版权所有
        { this.productName }
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
