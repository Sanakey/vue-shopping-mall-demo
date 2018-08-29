<template>
  <div class="header">
    <div class="header-content">
      <div class="header-logo">
        <img src="http://pmt612d08.pic7.websiteonline.cn/upload/211_cx2l.jpg" alt="#">
      </div>
      <div class="header-input">
        <div class="input-div">
          <input class="input" placeholder="全球建材家居垂直供应链平台" type="text"><button class="search-btn">搜索</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderContent'
}
</script>

<style scoped lang="stylus">
  @import "~assets/varibles.styl"
  $height = 40px
  a
    color: #fff
    padding: 0px 10px
  a+a
    border-left: 1px solid #fff
  .header
    width: 100%
    color: #333
    font-size: 13px
    .header-content
      width: 600px
      margin 15px auto
      .header-logo
        text-align: center
      .input
        width: 500px
        height: $height
        border: 2px solid #666
        line-height: $height
        font-size: 12px
        padding: 0 10px
        box-sizing: border-box
      .search-btn
        height: $height
        line-height: $height
        width: 80px
        background-color: #333
        color: #fff
        font-size: 14px
</style>
