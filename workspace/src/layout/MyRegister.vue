<template>
  <div>
      <!-- <Header/> -->
      <Search/>
      <MyTitle/>
      <MyloginBar/>
      <Register/>
  </div>
</template>

<script>

import MyTitle from "../components/MyTitle"
import MyloginBar from "../components/MyloginBar"
import Register from "../components/Register"
// import Header from "../components/Header"
import Search from "../components/Search"
export default {
    name:"MyRegister",
    components:{
        Search,MyTitle,MyloginBar,Register
    }
}
</script>

<style>

</style>