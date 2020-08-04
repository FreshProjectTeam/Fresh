<template>
  <div class="box">
    <div class="glass">
        <img src="../assets/images/search.png"/>
    </div>
    <div class="logo">
        <img src="../assets/images/logo.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 1rem;
  background: #e3f0f8;
  position: relative;
  position: fixed;
  top: 0;
  z-index: 22;
}
.box .glass {
    display: flex;
    align-items: center;
    width: 1.0667rem;
    height: 1rem;
    position: absolute;
    left: 1rem;
    line-height: .8rem;
    text-align: center;
}
.box .glass img {
  width: 0.4rem;
  height: 0.4rem;
}
.box .logo {
  height: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.box .logo img {
  width: 2.5rem;
  height: 0.8rem;
}
</style>