import GlobalHeader from './components/GlobalHeader'

export default {
  render () {
    return (
      <div id="app">
        <GlobalHeader />
        <router-view />
      </div>
    )
  }
}
