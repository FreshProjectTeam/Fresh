<template>
    <div>
        <Search/>
        <ShoppingBar/>
        <ShoppingCon/>
        <MyFooter/>
    </div>
</template>

<script>

import Search from "../components/Search"
import ShoppingBar from "../components/ShoppingBar"
import ShoppingCon from "../components/ShoppingCon"
import MyFooter from "../components/MyFooter"

export default {
    name:"Shopping",
    components:{
        Search,ShoppingBar,ShoppingCon,MyFooter
    }
}
</script>

<style>

</style>