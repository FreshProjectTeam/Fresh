<template>
  <div id="box">
      <div>
          <span>购物袋</span>
      </div>
      <div>
          <span>结算</span>
      </div>
  </div>
</template>

<script>

export default {
    name:"ShoppingBar"
}
</script>

<style scoped>
    #box{
        display: flex;
        width: 100%;
        height: 1rem;
        margin-top: 1rem;
        /* background-color: #ccc; */
        padding: 0 .5rem;
    }
    #box div:nth-child(1){
        width: 50%;
        text-align: center;
        line-height: 1rem;
        border-bottom: 0.04rem solid black;
    }
    #box div:nth-child(1) span{
        font-size: 0.25rem;
    }
    #box div:nth-child(2) span{
        font-size: 0.25rem;
    }
    #box div:nth-child(2){
        width: 50%;
        text-align: center;
        line-height: 1rem;
        /* background-color: yellow; */
    }
    .active{
        border-bottom: 0.04rem solid black;
    }
</style>