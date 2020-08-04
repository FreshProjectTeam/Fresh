<template>
  <div id="box">
          <div class="login">
              <router-link to="/MyLogin" replace>
                      <div class="box1">账号密码登录</div>
              </router-link>
          </div>
          
          <div class="register">
              <router-link to="/MyRegister" replace>
                      <div class="box2">验证码登录/注册</div>  
              </router-link>
          </div>
  </div>
</template>

<script>

export default {
    name:"MyloginBar"
}
</script>

<style scoped>
.login , .register{
  margin-top: .8rem;
}
#box{
  display:flex;
  width:100%;
  margin-left:.4rem;
  text-align: center;
}
.box1{
  width:3.35rem;
  color:#999;
}
.box2{
  width:3.35rem;
  color:#999;
}
.router-link-active {
  display: block;
  width: 3.35rem;
  /* color: #000; */
  padding-bottom: 0.15rem;
  border-bottom:.08rem solid black;
}
.router-link-active .box1{
  color: #000;
}
.router-link-active .box2{
  color: #000;
}



    /* #box{
      display: flex;
      padding: .8rem 0 0;
      justify-content:center;
      border-bottom: 1px solid black;
    }
    .router-link-active{
        display: block;
        width: 3.5rem;
        color: #000;
        border-bottom:.12rem solid black;
    }
     #box .login {
      padding-right: .35rem;
      text-align: center;
    }
    #box .register {
      margin-left: 1rem;
      text-align: center;
    } 
    .login span{
      font-weight: 400;
      font-size: 0.225rem;
      color: black;

      
    }
    .register span{
      font-weight: 400;
      color: black;
      font-size: 0.225rem;
    } */

   
</style>