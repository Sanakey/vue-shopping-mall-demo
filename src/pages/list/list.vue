<template>
  <div id="list">
    <top-bar></top-bar>
    <header-content></header-content>
  </div>
</template>

<script>
import TopBar from '../../components/TopBar'
import HeaderContent from '../../components/HeaderContent'

export default {
  name: 'list',
  components: {
    TopBar,
    HeaderContent
  },
  data () {
    return {
      msg: 'I am list'
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
