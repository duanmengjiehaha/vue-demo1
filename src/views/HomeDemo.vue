<template>
  <section class="home">
    <div class="container">
      <div class="big1">
        <h1>小组简介</h1>
        <div class="int-line"></div>

        <div class="group">

        <div class="group1">
          <div class="smalldiv1">
            <img src="../assets/small1.png" class="smallpic1" />
          </div>
          <h2>宗旨</h2>
          <p>服务同学,敢于创新,勇于创新,不断追寻梦想,共同进步</p>
        </div>
        <div class="group2">
          <div class="smalldiv1">
            <img src="../assets/small2.png" class="" />
          </div>
          <h2>特点</h2>
          <p>项目主导,帮带式教学,注重个人能力提升,每周一会,每月一测</p>
        </div>
        <div class="group3">
          <div class="smalldiv1">
            <img src="../assets/small3.png" class="" />
          </div>
          <h2>项目</h2>
          <p>职称评定系统,人脸识别,社团管理系统,Sunshine跑步软件</p>
          </div>
        </div>
      </div>
      <div class="outside">
        <!-- <img src="@/assets/bg1.webp"> -->
      <div class="big2">
        <h1>发展情况</h1>
        <div class="int-line"></div>
        <p>
          星火软件工作室始于2007年，工作室以创新为导向、以实践为手段、以真实项目为抓手、以培养学生成才为目的，
        </p>
        <p>
          在真实的项目实践中培养学生的创新实践能力。目前，已与多家企业建立了良好的合作关系。
        </p>
        <p>
          星火软件工作室成立十多年来，一直深受学校、学院领导老师的深切关怀和指导
        </p>
        <p>
          形成了以校外实践导师、校内指导老师和小组学长学姐帮带为核心的计算机学科群实践培养模式。多年来培养了多位行业人才
        </p>
      </div>
      </div>
      <div>
        <h1>指导老师</h1>
        <div class="int-line"></div>
        <div class="teacherdiv">
          <img src="../assets/teacher.jpg" class="teacherpic">
        </div>
        <div>
          <div class="peoplointro">
            <div v-for="(item,index) in teachersintro" :key=index>
              <span class="bigfont">{{ item.title }}</span>
            <span>
              {{ item.content }}
            </span>
            </div>
          </div>
        </div>

        <div class="main-others">
          <div class="others" v-for="(item,index) in others" :key=index>
              <span  class="bigfont" >{{ item.title }}</span>
              <span>{{ item.content }}</span>
              </div>
            </div>
      </div>
      <h1 class="numbers">管理负责人</h1>
    <div class="int-line"></div>
    <div class="big3">
        <div class="big3-li " v-for="(item,index) in leaders" :key="index">
          <div class="int-image"><div class="int-inner"><img :src=item.url ></div></div>
          <div class="int-text">
            <p>{{ item.content }} </p>
            <p class="look">{{ item.message }}</p>
            </div>
        </div>
    </div>
    </div>
  </section>
</template>
<script>

export default {
  name: 'AboutDemo',
  data () {
    return {
      leaders: [
        { url: require('../assets/leader1.png'), content: '赵珍威', message: '希望你在余生中努力学习，一路顺风，以后的路还很长，加油！' },
        { url: require('../assets/leader2.png'), content: '张宸菘', message: '经历挫折并不可怕，用于探索未知领域，为将来打下坚实的基础！' },
        { url: require('../assets/leader3.png'), content: '宋博文', message: '翻过人生的一道道山峦，在未来的路程中，祝你万事顺遂，前程似锦！' },
        { url: require('../assets/leader4.png'), content: '李梦净', message: '勇于追求梦想，坚定前行，在未来的日子里取得鲜花和荣誉！' }
      ],
      teachersintro: [
        { title: '个人简历:', content: '侯老师, 男, 硕士, 数据科学与大数据科研室主任' },
        { title: '研究方向:', content: '数据库技术, 工作流管理技术, 软件工程, 嵌入式' },
        { title: '承担课程:', content: '操作系统, 数据结构, 专业英语' },
        { title: '目前学历:', content: '学士: 河南科技学院; 硕士: 武汉理工大学; 在读博士; 西安电子科技大学' },
        { title: '学术成果:', content: '发表学术论文数十余篇, 其中EI检索8篇、 核心论文3篇; 出版学术著作2部' }
      ],
      others: [
        { title: '其余指导老师:', content: '' },
        { title: '周老师:', content: '中南大学博士' },
        { title: '焦老师:', content: '西安电子科技大学博士' },
        { title: '冀老师:', content: '星火软件工作室第一届, 北京工业大学博士' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  background-size: cover;
  background-position: center;
  text-align: center;
 // padding: 200px;
  //padding-top: 50px;
  display: flex;
  flex-direction: column;
}
.container {
  /* 其他样式 */
  display: flex;
  flex-direction: column;
}
.int-line {
  width: 40px;
  height: 15px;
  border-bottom: 2px solid #4f74a3;;
  margin: 0 auto;
}
// .main-others {
//   width: 80%;
//   height: auto;
//   margin: 0 auto;
// }
.main-others .others {
  float: left;
  // width: 10%;
  height: auto;
  margin-left: 50px;
}
.outside {
// width: 1000px;
// height: 600px;
//   img{
// // background-image: url("@/assets/bg1.webp");
// //   background-repeat: no-repeat;
// //    background-size: cover;
// //    background-position: center;
//    width: 100%;
//    height: 100%;
//    margin: 0;
//    padding: 0;
//    position: relative;
// }
}
.outside .big2 {
  margin-top: 30px;
  //position: absolute;
  //  p {
  //   color: #fff
  //  }
}
// .big2 h1 {
//   color: #fff
// }
.group {
  width: 1000px;
  height: 300px;
  margin: 0 auto;
}
.group1  {
  float: left;
  width: 250px;
  // border-width: 2px;
  // border-style: solid;
  border-color: #d2cfcf;
  height: 300px;
  margin-top: 30px;
  margin-left: 75px;
  margin-right: 50px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}
.group2 {
  float: left;
  width: 250px;
  border-width: 2px;
  border-style: solid;
  border-color: #d2cfcf;
  height: 300px;
  margin-right: 50px;
  margin-top: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}
.group3 {
  width: 250px;
  float: left;
  border-width: 2px;
  border-style: solid;
  border-color: #d2cfcf;
  margin-top: 30px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}
.smalldiv1 {
  margin-left: 58px;
  margin-top: 10px;
  width: 140px;
  height: 140px;
  border-style: solid;
  border-color: #d2cfcf;
  border-radius: 70px;
  overflow: hidden;
  display: flex;
  align-items: center; /* 垂直居中对齐 */
  justify-content: center; /* 水平居中对齐 */
}
.teacherdiv {
  float: left;
  width: 400px;
  height: 450px;
}
.teacherpic {
  width: 100%;
}
.otherteacher {
  // margin-left: 400px;
}
.peoplointro {
  text-align: left;
  height: 450px;
  line-height: 60px;
}
h1 {
 font-size: 33px;
  color: black;
  font-weight: bold;
  padding-top: 50px;
}
h2 {
  font-size: 18px;
  margin-top: 12px;
}
.bigfont {
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
}
span {
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 20px;
}
p {
  margin-top: 15px;
  line-height: 40px;
}
.big3 {
    width: 1300px;
    height: 450px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* 水平居中 */
    margin-top: 20px;
}
.big3-li {
  //display: inline-block;
 // justify-content: center;
  width: 250px;
  height: 370px;
  margin: 20px;
  font-size: 18px;
  border: 1px solid #ccc; /* 设置边框 */
  border-radius: 4px; /* 设置圆角边框 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4); /* 添加阴影效果 */
  background-color: #fff; /* 设置背景颜色 */
  .int-image {
    width: 100%;
    height: 65%;
    display: flex;
    position: relative;
    .int-inner {
      width: 75%;
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
   .int-text  {
    width: 100%;
    height: 30%;
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
      margin-top: -15px;
    }
    .look {
        font-weight: normal;
        font-size: 14px;
      }
  }
}
</style>
