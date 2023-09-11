<template>
  <section class="about">
    <h2 >成员概况</h2>
    <div class="about-line"></div>
    <p class="include" v-for="(item,index) in include" :key=index>{{ item }}</p>

    <h2 class="numbers">成员列表</h2>
    <div class="about-line"></div>
    <div class="page">
        <div class="page-li " v-for="(item,index) in boxes" :key="index">
          <div class="image"><div class="inner"><img :src=item.url ></div></div>
          <div class="text">
            <p>{{ item.content }} </p>
            <p><a href="http://localhost:8080/#/">点击查看博客</a></p>
            </div>
        </div>
    </div>
    <el-pagination
      v-model="currentPage"
      :page-size="pageSize"
      :total="total"
      @current-change="handleCurrentChange"
    />
  </section>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.js"></script>
<script>
import 'bootstrap/dist/js/bootstrap.js';
</script>
<script>
//import Vue from 'vue'
// import { getUser } from '@/axios/api.js';

export default {
  name: 'AboutDemo',
  data () {
    return {
      currentPage: 1,
      pageSize: 8,
      total: 0,
      boxes: [],
      include: ['星火软件工作室始于2007年，现如今共有39位成员。', '其中包括大前端17人，Java后端17人，python3人，大数据1人，UI设计1人。']
    }
  },
   methods: {
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
      this.fetchData();
    },
    fetchData() {
      // 模拟请求数据
      setTimeout(() => {
        // 根据当前页码和每页显示数量计算起始索引
        const startIndex = (this.currentPage - 1) * this.pageSize;
        // 获取当前页的数据
        this.boxes = this.allBoxes.slice(startIndex, startIndex + this.pageSize);
      }, 500);
    }
  },
  created() {
    // 模拟获取所有数据的请求
    setTimeout(() => {
      this.allBoxes = [
        {url: require('../assets/s6.png'), content: '成员1'},
        {url: require('../assets/s6.png'), content: '成员2'},
        {url: require('../assets/s6.png'), content: '成员3'},
        {url: require('../assets/s6.png'), content: '成员4'},
        {url: require('../assets/s6.png'), content: '成员5'},
        {url: require('../assets/s6.png'), content: '成员6'},
        {url: require('../assets/s6.png'), content: '成员7'},
        {url: require('../assets/s6.png'), content: '成员8'},
        {url: require('../assets/s7.png'), content: '成员1'},
        {url: require('../assets/s7.png'), content: '成员2'},
        {url: require('../assets/s7.png'), content: '成员3'},
        {url: require('../assets/s7.png'), content: '成员4'},
        {url: require('../assets/s7.png'), content: '成员5'},
        {url: require('../assets/s7.png'), content: '成员6'},
        {url: require('../assets/s7.png'), content: '成员7'},
        {url: require('../assets/s7.png'), content: '成员8'}
      ];

        // 其他数据...
      this.total = this.allBoxes.length;

      // 获取初始数据
      this.fetchData();
    }, 100);
  }
}
</script>
<style>
@import "~bootstrap/dist/css/bootstrap.css";
</style>

<style lang="less" scoped>
.about {
  text-align: center;
  background-color: #f2f2f2;
  padding: 50px;
}

.numbers {
 // font-size: 24px;
  margin-top: 50px;
}
h2 {
    font-weight: bold;
  }
.about-line {
  width: 40px;
  height: 15px;
  border-bottom: 2px solid #4f74a3;;
  margin: 0 auto;
}
.include {
  margin: 30px;
  font-size: 18px;
  color: #000000;
}
.page {
    width: 1300px;
    height: 700px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* 水平居中 */
    margin-top: 20px;
}
.page-li {
  //display: inline-block;
 // justify-content: center;
  width: 250px;
  height: 300px;
  margin: 20px;
  font-size: 18px;
  border: 1px solid #ccc; /* 设置边框 */
  border-radius: 4px; /* 设置圆角边框 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4); /* 添加阴影效果 */
  background-color: #fff; /* 设置背景颜色 */
  .image {
    width: 100%;
    height: 75%;
    display: flex;
    position: relative;
    .inner {
      width: 72%;
      height: 80%;
      //margin: 0 auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      // border: 1px solid transparent;
      // border-radius: 50%;
         img {
           width: 100%;
           height: 100%;
           border: 1px solid transparent;
           border-radius: 60%;
        }
    }
  }
   .text  {
    width: 100%;
    height: 25%;
    //display: flex;
    // justify-content: center; /* 水平居中 */
    // align-items: center; /* 垂直居中 */
    // padding-top: 6px;
    font-size: 15px;
    p {
      width: 100%;
      height: 50%;
      margin: 0 auto;
      font-weight: bold;
      font-size: 18px;
    }
    a {
      text-decoration: none; /* 去掉下划线 */
  color: black; /* 将颜色设为黑色 */
  font-weight: normal;
  font-size: 14px;
    }
  }
}
</style>
