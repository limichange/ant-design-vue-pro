import CopyrightFooter from '../components/CopyrightFooter'

export default {
  name: 'Home',
  render () {
    return (
      <div>
        <div>Home</div>
        <CopyrightFooter
          companyName="companyName"
          productName="productName" />
      </div>
    )
  }
}
