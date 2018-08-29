<template>
  <div class="header">
    <div class="header-content">
      <div class="header-left">
        <i class="iconfont icon">&#xe8c8;</i>
        <div class="info">
          <a href="#">登录</a><a href="#">注册</a>
        </div>
      </div>
      <div class="header-right">
        <i class="iconfont icon">&#xe8d6;</i>
        <a href="#" class="info">商城</a>
        <i class="iconfont icon">&#xe8c9;</i>
        <a href="#" class="info">会员</a>
        <i class="iconfont icon">&#xe684;</i>
        <a href="#" class="info">设计师</a>
        <div class="tel">TEL:400-116-2858</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar'
}
</script>

<style scoped lang="stylus">
  @import "~assets/varibles.styl"
  $height = 30px
  a
    color: #fff
    padding: 0px 10px
  a+a
    border-left: 1px solid #fff
  .header
    width: 100%
    height: $height
    line-height: $height
    background-color: $bgColor
    color: #fff
    font-size: 13px
    .header-content
      display: flex
      flex-direction: row
      justify-content: space-between
      width: 1000px
      margin 0 auto
      .icon
        font-size: 20px
      .tel
        margin: 0 10px
      .header-left,.header-right
        display: flex
        flex-direction: row

  @media screen and (min-width: $screenWidth)
    .header
      .header-content
        width: $contentWidth
</style>
