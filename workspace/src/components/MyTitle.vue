<template>
  <div id="box">
      <span>会员登录/注册</span>
      <em><router-link to="/Shopping">X</router-link></em>
  </div>
</template>

<script>
export default {
  name:"MyTitle"
}
</script>

<style scoped>
    #box{
      text-align: center;
      padding-top: 2.2rem;
    }
    #box span{
      font-size: .5rem;
      font-weight: 800;
      font-family: 宋体;
      color: #354248;
    }
    #box em{
      float: right;
      padding-right: .3rem;
      font-size: .5rem;
      font-weight: 700;
      font-family: 宋体;
      color: #354248;
    }

</style>