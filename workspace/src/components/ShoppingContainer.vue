<template>
  <div id="box">
    <p>1项</p>
    <div class="goods">
      <input type="checkbox" />
      <img src="../assets/images/four.png" />
      <div class="detail">
        <span>红茶塑颜紧致精华露</span>
        <dl>单价：￥ <em>{{singlePrice}}</em></dl>
        <div class="size">
          规格：
          <select>
            <option value>50ml</option>
            <option value>30ml</option>
          </select>
        </div>
        <i class="iconfont icon-aixin_shixin"></i>
        <a href style="text-decoration:underline">加入心愿单</a>
      </div>
      <div class="count">
        <el-input-number id="input" v-model="num" @change="handleChange" font-size=".6rem" :min="1" :max="1000" label="9"></el-input-number>
        <dl>￥ {{totalPrice}}</dl>
      </div>
    </div>
    <div class="list">
        <div class="price">
              <span>小计</span>
              <span>￥ <i>{{totalPrice}}</i> </span>
        </div>
        <div class="price">
              <span>运费：</span>
              <span>免运费</span>
        </div>
        <div class="price" style="font-size:.25rem;font-weight: bolder;">
              <span>订单统计：</span>
              <span>￥ <i>{{totalPrice}}</i></span>
        </div>
              <em>(已享包邮)</em>
    </div>
    <div class="pay">结算</div>
    <div class="pay" style="border:1px solid black;background-color:#fff;color:#000">继续购物</div>
  </div>
</template>

<script>
export default {
  name: "ShoppingContainer",
  data() {
      return {
          num: 1,
          singlePrice:860,
          totalPrice:860,
      }
  },
  methods: {
          handleChange(value) {
            this.totalPrice=this.num*this.singlePrice
          }
  },
};
</script>

<style scoped>


#input{
  width: 1.2rem;
  color: red;
}

#box {
  padding: 0 0.5rem;
}
#box p {
  height: 0.75rem;
  line-height: 0.75rem;
  font-size: 0.3rem;
  color: #36424a;
  font-weight: 500;
  padding: 0 0.5rem;
  border-bottom: 1px solid rgba(215, 217, 219, 0.8);
}
#box .goods {
  width: 100%;
  display: flex;
  padding: 0 0.5rem;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid rgba(215, 217, 219, 0.8);
}
#box .goods input {
  width: 0.25rem;
  height: 0.25rem;
}
#box .goods img {
  width: 0.8rem;
  height: 0.8rem;
  margin: 0.3rem 0;
  background-color: pink;
}
.goods .detail {
  line-height: 0.5rem;
  padding: 0.25rem 0.15rem 0.2rem 0;
}
.goods .detail span {
  font-size: 0.24rem;
  color: #36424a;
}
.goods .detail select {
  height: 0.4rem;
  border: 1px solid black;
}
.detail i {
  font-size: 0.3rem;
  color: red;
}

.goods .count span{
  height: .2rem;
  /* background-color: yellow; */
}
.goods dl{
  margin-top: .24rem;
}
.count button {
  width: 0.5rem;
  height: 0.5rem;
  border: none;
  background-color: #ccc;
  border: 1px solid black;
}
.list {
  width: 100%;
  height: 2.1rem;
  padding: 0.2rem;
  background-color: #e3f0f8;
}
.list .price {
  display: flex;
  line-height: 0.5rem;
  justify-content: space-between;
  color: #45545f;
  font-size: 0.25rem;
}
#box .list em {
  display: block;
  float: right;
  color: #45545f;
  font-size: 0.2rem;
}
#box .pay {
  width: 100%;
  height: 0.8rem;
  color: #fff;
  cursor: pointer;
  margin-top: 0.4rem;
  text-align: center;
  line-height: 0.8rem;
  background: #303e47;
  border-color: #303e47;
}
</style>