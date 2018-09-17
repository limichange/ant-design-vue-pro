<script>
import props from './props'

export default {
  name: 'Logo',
  props,
  render () {
    return (
      <div class={this.$style.Logo}>
        {this.logoSrc && <img src={this.logoSrc} alt="logo" />}
        <h1>{this.title}</h1>
      </div>
    )
  }
}
</script>

<style lang="less" module>
@menu-collapsed-width: 80px;

.Logo {
  height: 64px;
  position: relative;
  line-height: 64px;
  padding-left: (@menu-collapsed-width - 32px) / 2;
  transition: all 0.3s;
  background: #002140;
  overflow: hidden;

  img {
    display: inline-block;
    vertical-align: middle;
    height: 32px;
  }

  h1 {
    color: white;
    display: inline-block;
    vertical-align: middle;
    font-size: 20px;
    margin: 0 0 0 12px;
    font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;
    font-weight: 600;
  }
}
</style>
