<template>
    <div>
        <Search/>
        <div class="box">
            <ShoppingBar/>
            <ShoppingContainer/>
            <recommend/>
        </div>
        <MyFooter/>
    </div>
</template>

<script>

import Search from "../components/Search"
import ShoppingBar from "../components/ShoppingBar"
import ShoppingContainer from "../components/ShoppingContainer"
import MyFooter from "../components/MyFooter"
import recommend from "../components/recommend"

export default {
    name:"ShoppingGoods",
    components:{
        Search,ShoppingBar,ShoppingContainer,MyFooter,recommend
    }
}
</script>

<style scoped>
 
</style>