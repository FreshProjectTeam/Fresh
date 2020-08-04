<template>
  <div class="box">
      <div>
        <input type="text" placeholder="搜索">
        <div class="pic"><img src="../assets/images/search.png"></div>
    </div>
  </div>
</template>

<script>
export default {
    name:"Header"
}
</script>

<style scoped>
.box{
    width: 100%;height: 1rem;background: #E3F0F8;
    display: flex;align-items: center;justify-content: center;
}
.box>div{
    width: 90%;height: 0.4267rem;background: white;
    display: flex;justify-content: space-between;
    border-radius: 0.1333rem;
}
.box>div input{width: 90%;height: 0.4267rem;border: none;
    border-radius: 0.1333rem 0 0 0.1333rem;    outline: none;
    font-size: 0.1733rem;padding-left: 0.1333rem;
    }
.box>div .pic{width: 10%;height: 0.4267rem; text-align: center;line-height: 0.4267rem;}
.box>div img{width: 15px;height: 0.2rem;}

</style>