<template>
  <div>
    <div class="about">
      <div class="title"><h2>学习方向</h2></div>
      <div class="line"></div>
      <div class="jieshao">
        <div class="jianjie" v-for="(item,index) in jianjie" :key=index>
          {{ item }}
        </div>
        <!-- <div class="jianjie">
          其实无论学习什么方向，我们都真诚地希望大家能在小组内学到知识，我们也鼓励<strong>考研</strong>哦！
        </div> -->
      </div>
    </div>
    <div class="container">
      <div class="member_container" v-for="(item,index) in direction " :key=index>
        <div class="direction">
          <div class="circle">
            <img :src=item.url>
          </div>
          <div class="q_h"><h2>{{ item.title }}</h2></div>
          <div class="q_n">
            <div class="jieshao">
            <div class="jianjie">
              {{ item.paragraph1 }}
            </div>
            <div class="jianjie">
              {{ item.paragraph2 }}
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  </div>
</template>
<script>

export default {
  name: 'AboutDemo',
  data () {
    return {
      jianjie: [
        '我们学习的方向有很多，包括大前端，java后端，python，UI设计，大数据',
        '其实无论学习什么方向，我们都真诚地希望大家能在小组内学到知识，我们也鼓励考研哦！'
      ],
      direction: [
        { url: require('../assets/s6.png'), title: '大前端', paragraph1: '负责网站，app或微信小程序的前端开发', paragraph2: '并能按照预期完成产品的交互功能' },
        { url: require('../assets/s7.png'), title: 'JAVA后端', paragraph1: '参与产品的需求分析与设计，负责研发', paragraph2: '产品的基本构架设计，开发和升级维护等。' },
        { url: require('../assets/s8.png'), title: 'python', paragraph1: ' Web应用开发、数据分析与挖掘、AI', paragraph2: '应用程序设计开发、网络爬虫应用编' },
        { url: require('../assets/s9.png'), title: 'UI设计', paragraph1: 'UI设计即页面设计，是针对软件的', paragraph2: '人机交互、操作逻辑、界面美观的整体设计。' },
        { url: require('../assets/s10.png'), title: '大数据', paragraph1: '大数据可以做：帮助企业了解消费', paragraph2: '者，提高场频质量，优化供应链，预测市场趋势等。' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 50px;
  background-color: white;
}
.title h2 {
  font-weight: bold;
 // margin: 50px;
}
.line {
  width: 40px;
  height: 2px;
  background-color: #4f74a3;
  margin-top: 0px; /* 可根据需要调整距离顶部的间距 */
}
.title{
  height: 55px;
}
.jieshao{
  height: 80px;
  /* //background-color: #4f74a3; */
}
.jianjie{
  margin-top: 20px;
  color:#666666;
  font-size: 16px;
}
.container {
  display: flex; /* 使用 flex 布局 */
  justify-content: center; /* 水平居中对齐 */
}
.member_container .direction {
  vertical-align: top;
  display: inline-block;
  width: 230px;
  height: 330px;
  margin: 35px 20px;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}
.circle img{
  margin-top: 10px;
  width: 160px;
  height: 160px;
  /* //background-color: black; */
  border-radius: 50%; /* 将border-radius设置为50%实现圆形效果 */
}
.q_n .jianjie{
  font-size: 12px;
  margin-top: 10px;
}
</style>
