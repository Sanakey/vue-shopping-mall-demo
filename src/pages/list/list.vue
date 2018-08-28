<template>
  <div id="list">
    <top-bar></top-bar>
  </div>
</template>

<script>
import TopBar from '../../components/TopBar'

export default {
  name: 'list',
  components: {
    TopBar
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
