<template>
  <div id="box">
      <img src="../assets/images/empty_cart.jpg" alt="">
      <span>您的购物袋内还没有任何商品</span>
      <a href="###" class="cew-shopping">去首页逛逛</a>
    <p class="tips">您的购物袋内还没有任何商品</p>
  </div>
</template>

<script>

export default {
    name:"ShoppingCon"
}
</script>

<style scoped>
    #box{
        width: 100%;
        text-align: center;
        padding: 0 .5rem;
        /* background-color: peachpuff; */
    }
    #box img {
        margin:  .9rem auto .5rem;
    }
    .cew-shopping{
        display: block;
        width: 100%;
        height: .8rem;
        line-height: .8rem;
        color: #fff;
        margin-top: 1rem;
        background-color: #000;
    }
    .tips{
        height: .84rem;
        line-height: .84rem;
        font-weight: 400;
        /* font-size: 3.2vw; */
        text-align: center;
    }
    
</style>