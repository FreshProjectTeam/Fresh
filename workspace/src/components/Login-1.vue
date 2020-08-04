<template>
  <div>
    <div class="myheader">
      <span @click="goFoodlist">取消</span>
      登录
    </div>
    <div class="tele">
      <div class="telimg">
        <img
          src="https://image.hongbeibang.com/Fuxcd1wWFCY-HNifMfUbrcVBqxlc?50X50&imageView2/1/w/50/h/50"
          alt
        />
      </div>
      <div class="telbox">
        <span>+981</span>
        <span>
          <img
            src="https://image.hongbeibang.com/FvouzJLfDehM1NfR7u-51rBxkxxu?20X20&imageView2/1/w/20/h/20"
          />
        </span>
        <input type="text" id="tel" placeholder="输入手机账号" maxlength="11" v-model="username" />
      </div>
    </div>
    <!-- 输入密码 -->
    <div class="password">
      <div class="passimg">
        <img
          src="https://image.hongbeibang.com/FhVd-FHn1W_yhi5vMjtsAQGSicId?50X50&imageView2/1/w/50/h/50"
        />
      </div>
      <input type="password" id="pwd" placeholder="输入密码" v-model="userpass" />
    </div>
    <!-- 忘记密码 -->
    <div class="forgetpwd">忘记密码</div>
    <!-- 登录 -->
    <div class="loginin-btn" @click="goLogin()">登录</div>
    <div class="thirdlogin">第三方账号登录</div>
    <div class="weiqqbox">
      <img
        src="https://image.hongbeibang.com/FmQ44nNcTSqmWx3s9wT0hUUBMPb1?200X200&imageView2/1/w/140/h/140"
        alt
      />
      <img
        src="https://image.hongbeibang.com/Fq_j5DBvHFjeXIgXq-fFFDtiIvq5?200X200&imageView2/1/w/140/h/140"
        alt
      />
    </div>
    <!-- 快速注册 -->
    <p class="fasterreg">快速注册</p>
    <!-- mask盒子 -->
    <div class="mask" v-if="flag">
      <div class="sureBtn">
        <h2>提示</h2>
        <input ref="loginTips" v-model="loginTip" />
        <p @click="flag=!flag">确定</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      userpass: "",
      loginTip: "",
      flag: false
    };
  },
  methods: {
    goFoodlist() {
      this.$router.push({ path: "Foodlist" });
    },
    // 登陆验证及请求
    goLogin() {
      let phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!phoneReg.test(this.username) || this.username == "") {
        this.flag = !this.flag;
        this.loginTip = "请正确输入11位手机号";
      } else if (this.userpass == "") {
        this.flag = !this.flag;
        this.loginTip = "请输入密码";
      } else {
        this.flag = this.flag;
        let data = new URLSearchParams();
        data.append("name", this.username);
        data.append("password", this.userpass);
        axios({
          url: "http://10.35.162.134:8000/api/user/login/",
          method: "post",
          data: data
        }).then(res => {
          if (res.data.code == 500) {
            (this.flag = !this.flag),
              (this.loginTip = "用户不存在，请先去注册");
          } else if (res.data.code == 400) {
            (this.flag = !this.flag), (this.loginTip = "账号或密码错误");
          } else {
            this.$router.push({ path: "Foodslist" });
          }
        });
      }
    }
  }
};
</script>

<style scoped>
.myheader {
  width: 100%;
  height: 44px;
  font-size: 18px;
  text-align: center;
  position: relative;
  font-weight: bolder;
  line-height: 44px;
  /* background-color: blue; */
}
.myheader span {
  position: absolute;
  left: 15px;
  line-height: 44px;
  color: #1976d2;
  font-size: 15px;
  font-weight: normal;
  margin: 15px 0;
  top: -15px;
}
.telimg {
  margin-right: 10px;
}
.telimg img {
  width: 25px;
  height: 25px;
}
.tele {
  height: 66px;
  /* margin-top: 44px; */
  display: flex;
  border: none;
  padding: 0 20px;
  align-items: center;
  margin-bottom: 5px;
  margin: 0 auto;
}

.telbox {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #807e7a;
  padding: 25px 0;
}
.telbox input {
  border: none;
}
.telbox span:nth-child(1) {
  font-size: 15px;
  color: #1976d2;
}
.telbox span:nth-child(2) {
  margin-right: 15px;
}
.telbox span:nth-child(2) img {
  width: 10px;
  height: 10px;
}
.telbox input {
  font-size: 18px;
  color: #807e7a;
}
.password {
  display: flex;
  width: 100%;
  height: 65px;
  align-items: center;
  padding: 0 20px;
}
.passimg {
  margin-right: 10px;
}
.password input {
  border: none;
  font-size: 18px;
  color: #a09f9d;
}
.password .passimg img {
  width: 25px;
  height: 25px;
}
.forgetpwd {
  width: 70px;
  height: 18px;
  position: relative;
  right: -300px;
  font-size: 15px;
  color: #1976d2;
}
.loginin-btn {
  width: 250px;
  height: 40px;
  font-size: 18px;
  text-align: center;
  line-height: 40px;
  background-color: #54aeeb;
  border-radius: 25px;
  margin: 0 auto;
  margin-top: 30px;
  color: #fff;
}
.thirdlogin {
  width: 100%;
  height: 20.67px;
  margin: 30px 0 0;
  text-align: center;
  font-size: 16px;
  color: #7a7b7e;
}
.weiqqbox {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10px 0 30px;
}
.weiqqbox img {
  width: 70px;
  height: 70px;
  margin: 10px;
}
.fasterreg {
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: #1976d2;
}
/* mask遮罩层 */
.mask {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  /* z-index: 10; */
  top: 0;
}
.sureBtn {
  width: 330px;
  height: 148px;
  background-color: white;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.sureBtn h2 {
  height: 22px;
  color: #4a4945;
  font-size: 19px;
  margin: 15px 20px;
  text-align: center;
}
.sureBtn input {
  border: none;
  width: 100%;
  height: 30px;
  text-align: center;
  line-height: 24px;
  font-size: 14px;
  font-weight: normal;
  margin: 0 auto;
  color: black;
}
.sureBtn p {
  width: 50px;
  height: 60px;
  float: right;
  text-align: right;
  line-height: 60px;
  color: #79baf9;
  font-size: 16px;
  cursor: pointer;
  margin-right: 40px;
}
</style>