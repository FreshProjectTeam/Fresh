<template>
  <div class="box">
      <span>首页</span>
      <span>商品分类</span>
      <span><router-link to="/ShoppingGoods">购物车</router-link></span>
      <span><router-link to="/MyLogin">我的</router-link></span>
  </div>
</template>

<script>
export default {
    name:"MyFooter"
}
</script>

<style scoped>
.box{
  display: flex;
  width: 100%;
  height: 1.1rem;
  background: #E3F0F8;
  position: fixed;
  bottom: 0;
  justify-content: space-around;
  align-items: center;
  z-index: 10;
}
.box span{
  flex: 1;
  height: 100%;
  line-height: 1.1rem;
  font-size: 0.28rem;
  text-align: center;
}
</style>