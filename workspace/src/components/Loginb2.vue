<template>
  <div>
    <div class="loginUser">
        <div>
            <input type="text" name="phone" placeholder="输入手机号" v-model="phone" />
        </div>

        <div class="box1">
            <input type="text" placeholder="输入短信验证码" v-model="verifyCode" />
            <span class="forgetPsd" @click="sendcode">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{btntxt}}</span>
        </div>
        
        <span class="forgetPsd1">首次登陆将为您创建账号</span>
    </div>

    <!-- 登录按钮 -->
    <button @click="handleLogin" :disabled="isClick">登录</button>

    <!-- 登录方式 -->
    <div class="methods">
      <span>
        <router-link to="./Login">密码登录</router-link>
      </span>&nbsp;&nbsp;&nbsp;
      <span>微信登录</span>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "Loginb2",
  data: function () {
    return {
      time: 0,
      btntxt: "获取验证码",
      formMess: {
        phone: this.phone,
        verifyCode: this.verifyCode
      },
    };
  },
  computed: {
    //手机号和验证码都不能为空
    isClick() {
      if (!this.phone || !this.verifyCode) {
        return true;
      } else {
        return false;
      }
    }
  },
  method: {
    //验证手机号码部分
    sendcode() {
          var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
          if (this.phone == "") {
            alert("请输入手机号码");
          } else if (!reg.test(this.phone)) {
            alert("手机格式不正确");
          } else {
            this.time = 60;
            this.timer();
            axios({
                url:"main/code",
                params:{
                    "phone": this.phone,
                }
            })
          }
    },
    timer() {
        if (this.time > 0) {
          this.time--;
          this.btntxt = this.time + "s后重新获取";
          setTimeout(this.timer, 1000);
        } else {
          this.time = 0;
          this.btntxt = "获取验证码";
        }
    },

    handleLogin() {
      //点击发送
          this.$axios.post("/api/posts/sms_back", {
              phone: this.phone,
              code: this.verifyCode,
          })
            
          .then((res) => {
                if (res == 2) {
                  localStorage.setItem("phone", this.phone);
                  
                  this.$router.push("/");
                } else if(res==1) {
                    this.$router.push("/跳转至设置密码页面");
                }else{
                  alert("请检查用户名和验证码");
                }
          });
    }
  },
};
</script>

<style scoped>
.loginUser {
  width: 5.89rem;
  height: 3.09rem;
  margin-bottom: 0.44rem;
}

.loginUser div {
  width: 100%;
  height: 1.03rem;
  line-height: 1.03rem;
  margin: 0 auto;
  border-bottom: 1px solid #d3d3d3;
}

.loginUser div input {
  font-size: 16px;
  height: 0.8rem;
  border: none;
  padding-top: 0.2rem;
  line-height: 0.8rem;
}

.forgetPsd {
  color: red;
  font-size: 14px;
}
.box1 {
  margin-bottom: 0.1rem;
}
.forgetPsd1 {
  color: rgb(226, 149, 26);
}
button {
  width: 100%;
  height: 1.05rem;
  border: none;
  background-color: rgb(138, 129, 123);
  font-size: 24px;
  color: cornsilk;
}
.methods {
  width: 100%;
  height: 0.8rem;
  padding-top: 0.3rem;
  color: red;
}
.methods span {
  font-size: 14px;
}
</style>