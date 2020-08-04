<template>
  <div id="box">
    <div>
      <input type="text" id="tel" placeholder="*手机号码" v-model="phone" />
    </div>
    <span id="tit" ref="tit"></span>
    <div class="sec-code" style="display:none">
      <input type="text" placeholder="*验证码" />
      <span>验证码</span>
    </div>
    <div class="sec-code">
      <input type="text" placeholder="*短信验证码" v-model="code" />
      <!-- <span style="background:#000;color:#fff">发送</span> -->

      <span style="background:#000;color:#fff" v-show="show" @click="getCode">发送</span>
      <span v-show="!show" class="count">{{count}} s</span>
    </div>
    <span id="tit" ref="tit"></span>
    <div class="notice">
      <p>*未登录fresh官方账号的手机,在使用验证码登陆时将自动注册</p>
    </div>

    <div class="protocol">
      <input type="checkbox" v-model="isChecked" />
      <em>
        我已阅读并接受
        <a href="#">个人信息收集声明</a>以及
        <a href="#">网站使用</a>
        和
        <a href="#">销售条款</a>
      </em>
    </div>
    <div class="forget">
      <span>*为必填项</span>
    </div>
    <span ref="Tip"></span>
    <div class="submit" @click="goLogin()">
      <a href="#">登陆/注册</a>
    </div>
    <div class="three">
      <p>—————————使用第三方登录—————————</p>
      <a href="#">
        <i class="iconfont icon-xinlangweibo1"></i>
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      phone: "13679254191",
      code: "",

      isChecked: false,
      show: true,
      count: "",
      timer: null,
    };
  },
 
  methods: {
    //获取验证码
    getCode() {
      let phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!phoneReg.test(this.phone) || this.phone == "") {
        this.$refs.tit.innerHTML = "请正确输入11位手机号";
        this.$refs.tit.style.color = "red";
      } else {
        this.$refs.tit.innerHTML = "";
        console.log(this.phone);
        axios({
          url: "user/code/",
          params: {
            phone: this.phone,
          },
        }).then((res) => console.log(res.data));

        const TIME_COUNT = 60;
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.show = false;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
            } else {
              this.show = true;
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000);
        }
      }
    },

    //      用户注册
    goLogin() {
      if (this.isChecked == false) {
        this.$refs.Tip.innerHTML = "请先勾选条款";
        this.$refs.Tip.style.color = "red";
      } else if (this.code == "") {
        this.$refs.tit.innerHTML = "请输入验证码";
        this.$refs.tit.style.color = "red";
      } else {
        this.$axios
          .post("user/regist/", {
            phone: this.phone,
            code: this.code,
          })
          .then((res) => {
            if (res == 0) {
              localStorage.setItem("phone", this.phone);
              this.$router.push("ShoppingGoods");
            } else if (res == 1) {
              this.$router.push("/Mylogin");
            } else {
              alert("请检查用户名和验证码");
            }
          });
      }
    },
  },
  watch:{
      ischecked() {
          if (this.ischecked == true) {
            this.$refs.Tip.innerHTML = "";
          }
          console.log(132)
      },
  },

};
</script>

<style scoped>
#box {
  text-align: center;
  padding-top: 0.6rem;
}
#box input {
  width: 90%;
  height: 0.7rem;
  font-size: 0.3rem;
  border: 1px solid black;
}
input::-webkit-input-placeholder {
  color: #3e4d57;
  font-size: 0.25rem;
}
#box .sec-code {
  display: flex;
  width: 90%;
  height: 0.7rem;
  margin: 0 0.4rem;
  justify-content: space-between;
}
#box .sec-code input {
  width: 70%;
  height: 0.7rem;
}
#box .sec-code span {
  width: 1.8rem;
  line-height: 0.7rem;
  height: 0.7rem;
  font-size: 0.3rem;
  border: 1px solid black;
}
#box div:nth-child(3) {
  margin-bottom: 0.25rem;
}
#box input:nth-child(1) {
  margin-bottom: 0.2rem;
}
#box .protocol input {
  width: 0.2rem;
  height: 0.2rem;
  margin: 0.3rem 0 0.1rem;
  background-color: blue;
}
.notice {
  margin-top: 0.8rem;
}
.notice p {
  font-size: 0.2rem;
  margin-right: 1.2rem;
  color: #666;
}
.forget {
  display: flex;
  justify-content: space-between;
  padding: 0 0.4rem;
  margin: 0.3rem 0 0.3rem;
}
#box .protocol a {
  text-decoration: underline;
}
.forget a {
  text-decoration: underline;
}
.submit {
  width: 90%;
  height: 0.8rem;
  line-height: 0.8rem;
  margin: 0.6rem auto;
  background-color: #000;
  border: 1px solid #a7adb0;
  margin: 0.5rem auto 0.5rem;
}
.submit a {
  color: #fff;
  font-size: 0.3rem;
}
.three p {
  padding-bottom: 0.3rem;
}
.icon-xinlangweibo1 {
  font-size: 0.7rem;
  color: #b8cfe9;
}
em {
  color: #999;
}
.protocol a {
  color: #36424a;
  font-weight: 700;
  text-decoration: underline;
  cursor: pointer;
}
</style>