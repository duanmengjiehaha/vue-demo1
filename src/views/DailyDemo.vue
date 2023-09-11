<template>
  <section class="daily">
    <!-- <h2>生活日常</h2> -->
    <!-- <div class="daily-line"></div> -->
    <div class="daily2">
      <p class="groupDaily1" v-for="(item, index) in msg" :key="index">
        {{ item }}
      </p>
    </div>
    <h2 class="phs">生活照片</h2>
    <div class="daily-line"></div>
    <div class="daily4">
      <ul>
        <!-- <li v-for="image in images" :key="image.id"><img :src="image.url" alt="图片" /></li> -->
        <li v-for="image in images" :key="image.id">
          <img :src="image.photo" />
          <div>
            <p class="groupDaily2">{{ image.description }}</p>
            <p class="groupDaily3">小组生活</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.js"></script>
<script>
//import Vue from 'vue'
import { getDaily } from "@/api/daily.js";
export default {
  name: "DailyDemo",
  data() {
    return {
      msg: [],
      images: [],
    };
  },

  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData () {
      try {
        const type = '1'
        const response = await getDaily(type)
        // 处理响应数据
        console.log(response.data)
        this.images = response.data
      } catch (error) {
        // 处理错误
        console.error(error)
      }
    }

  },
};
</script>

<style lang="less" scoped>
.daily {
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 50px;
  .daily2 {
    width: 80%;
    margin: 0 auto;
    margin-top: 30px;
    .groupDaily1 {
      display: inline-block;
      margin-top: 10px;
      line-height: 35px;
    }
  }
  // h1 {
  //   font-weight: bold;
  //   font-size: 20px;
  // }
  h2 {
    font-weight: bold;
  }
  .daily-line {
    width: 40px;
    height: 15px;
    border-bottom: 2px solid #4f74a3;
    margin: 0 auto;
  }
  .phs {
    margin-top: 30px;
  }
  .daily3 {
    margin-top: 20px;
  }
  .daily4 {
    width: 1200px;
    height: 840px;
    margin: 0 auto;
    margin-top: 30px;
    ul {
      list-style: none;
    }
    ul li {
      display: inline-block;
      // float: left;
      width: 300px;
      height: 420px;
      margin-right: 65px;
      margin-top: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.3);
      background-color: #fff;
    }
    ul li img {
      width: 100%;
      height: 300px;
      //border-radius: 50%;
      //  object-fit: cover;
    }
    ul li div {
      width: 100%;
      height: 120px;
      font-size: 20px;
      //display: flex;
      justify-content: center;
      align-items: center;
      .groupDaily2 {
        font-weight: bold;
        margin-top: 8px;
      }
      .groupDaily3 {
        font-weight: normal;
        font-size: 17px;
      }
    }
    // ul li .tnone {
    //   margin-top: 0px;
    // }
    // ul li .none {
    //   margin-right: 0px;
    // }
  }
}
</style>
