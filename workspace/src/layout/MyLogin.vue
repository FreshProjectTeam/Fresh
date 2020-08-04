<template>
  <div id="box">
      <!-- <Header/> -->
      <Search/>
      <MyTitle/>
      <MyloginBar/>
      <Login/>
  </div>
</template>

<script>

// import Header from "../components/Header"
import Search from "../components/Search"
import MyTitle from "../components/MyTitle"
import MyloginBar from "../components/MyloginBar"
import Login from "../components/Login"

export default {
    name:"MyLogin",
    components:{
        Search,MyTitle,MyloginBar,Login,//Header
    }
}
</script>
    
<style scoped>
    
</style>