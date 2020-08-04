<template>
  <div id="box">
    <div>
      <input type="text" id="tel" v-model="phone" maxlength="11" placeholder="*手机号码" />
    </div>
    <span id="tit" ref="tit"></span>

    <div>
      <input type="text" id="pwd" v-model="userpass" placeholder="*密码" />
    </div>
    <span id="tip1" ref="tip1"></span>

    <div class="protocol">
      <input type="checkbox" v-model="ischecked" />
      <em>
        我已阅读并接受
        <a href="#">个人信息收集声明</a>以及
        <a href="#">网站使用</a>
        和
        <a href="#">销售条款</a>
      </em>
    </div>
    <span ref="tip2"></span>
    <div class="forget">
      <span>
        <a href="#">忘记密码 ?</a>
      </span>
      <span>*为必填项</span>
    </div>

    <div class="submit" @click="goLogin()">
      <a href="#">登陆 / 注册</a>
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
  name: "Login",
  data() {
    return {
      ischecked: false,
      phone: "",
      userpass: "",
    };
  },
  methods: {
    goLogin() {
      let phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;

      if (!phoneReg.test(this.phone) || this.phone == "") {
        this.$refs.tit.innerHTML = "请正确输入11位手机号";
        this.$refs.tit.style.color = "red";

      } else if (this.userpass == "") {
        this.$refs.tip1.innerHTML = "请输入密码";
        this.$refs.tip1.style.color = "red";

      } else if (this.ischecked == false) {
        this.$refs.tip2.innerHTML = "请先勾选条款";
        this.$refs.tip2.style.color = "red";

      } else {
            let data = new URLSearchParams();
            data.append("phone", this.phone);
            data.append("pwd", this.userpass);
            
            axios({
              url: "user/login/",
              method: "post",
              data: data,
            }).then((res) => {
                console.log(res.data);
                if (res.data.code == 500) {
                  this.$refs.tit.innerHTML = "用户不存在，请先去注册";
                } else if (res.data.code == 400) {
                  this.$refs.tip1.innerHTML = "密码错误,请重新输入";
                } else {
                  this.$router.push({ path: "ShoppingGoods" });
                }
            });
      }
    },
  },
  watch: {
      phone() {
        this.$refs.tit.innerHTML = "";
      },

      userpass() {
          if (this.userpass !== "") {
              this.$refs.tip1.innerHTML = "";
          }
      },

      ischecked() {
          if (this.ischecked == true) {
            this.$refs.tip2.innerHTML = "";
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
  height: 0.8rem;
  font-size: 0.3rem;
  border: 2px solid black;
}
#box input:nth-child(1) {
  margin-bottom: 0.2rem;
}
input::-webkit-input-placeholder {
  color: #3e4d57;
  font-size: 0.25rem;
}
#box .protocol input {
  width: 0.2rem;
  height: 0.2rem;
  margin: 0.3rem 0 0.3rem;
  border: 0.0133rem solid black;
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
  line-height: 0.7rem;
  margin: 0.6rem auto;
  background-color: #000;
  border: 1px solid #a7adb0;
  margin: 0.3rem auto 0.5rem;
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

#box #tip1 span {
  display: block;
  width: 0.1rem;
  height: 0.4rem;
  background-color: pink;
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