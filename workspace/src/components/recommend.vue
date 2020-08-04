<template>
  <div id="box-con">
    <h6>为你推荐</h6> 
    <div class="block">
        <el-carousel height="7rem">
            <el-carousel-item v-for="item in 8" :key="item">
                <div class="con">
                    <div class="box">
                        <div class="GoodsDetail" v-for="(book,index) in books" :key="index">
                            <img class="img" :src="'/static/'+book.img"/>
                            <span>{{book.name}}</span>
                            <p>{{book.des}}</p>
                            <em>{{book.price}}</em>
                            <ul>
                                <li class="one" @click="one">50ml</li>
                                <li @click="two">30ml</li>
                            </ul>
                            <button>加入购物袋</button>
                        </div>

                        <!-- <div class="GoodsDetail">
                            <img src="../assets/images/goodsdetail.png"/>
                            <span>红茶素颜紧致精华露</span>
                            <p>一款卓越御龄精华，缔造更为紧致透亮的肌肤。</p>
                            <em>￥ 860</em>
                            <ul>
                                <li>50ml</li>
                                <li>30ml</li>
                            </ul>
                            <button>加入购物袋</button>
                        </div> -->

                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
    name: "recommend",
    data() {
        return {
          // books:["images/two.png","images/three.png","images/four.png","images/five.png","images/goodsdetail.png"]
          books:[]
        };
    },
    methods:{
        two(){
            $(".img").attr("src","/static/images/two.png");
          },
        one(){
          $(".img").attr("src","/static/images/goodsdetail.png");
        }
    },
    created(){
          axios({
            url:"http://localhost:3000/GoodsRecommend"
          }).then(res=>{
                this.books = res.data
                // console.log(res.data);
          })
    },
};
</script>

<style scoped>
    .el-carousel__item h3 {
      color: #475669;
      font-size: 0.1867rem;
      opacity: 0.75;
      line-height: 2rem;
      margin: 0;
    }
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }


    .box{
      display: flex;
      flex-wrap: wrap;
    }
    #box-con {
      margin: .5rem 0 1.5rem;
    }
    #box-con .block .con {
      width: 100%;
    }
    #box-con .box {
      width: 100%;
      display: flex;
    }

    #box-con h6 {
      display: block;
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      text-align: center;
      font-family: 宋体;
      font-size: 0.36rem;
      font-weight: 700;
      color: #384249;
    }

    .box .GoodsDetail {
      width: 3.75rem;
      text-align: center;
      background: #e3f0f8;
    }
    .box .GoodsDetail img {
      width: 4rem;
      height: 2.55rem;
      margin: auto;
    }
    .box .GoodsDetail span {
      display: block;
      margin-bottom: 0.1333rem;
      font-size: 0.3rem;
      margin-top: 0.2rem;
      font-weight: 400;
      color: #45545f;
    }
    .box .GoodsDetail p {
      min-height: 0.4rem;
      line-height: 0.4rem;
      color: #45545f;
    }
    .box .GoodsDetail em {
      display: block;
      padding: 0.1rem 0 0.3rem;
      font-size: 0.3rem;
    }
    .box .GoodsDetail button {
      width: 2.5rem;
      height: 0.6rem;
      margin-top: 0.2rem;
      font-size: 0.3rem;
      color: #fff;
      background-color: #000;
    }
    ul {
      display: flex;
      justify-content: center;
    }
    ul li {
      width: 1rem;
      height: 0.5rem;
      line-height: 0.5rem;
      margin-left: 0.1rem;
      border: 1px solid black;
    }
</style>