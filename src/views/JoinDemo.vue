<template>
  <section class="about">
    <h2 class="joinUs">加入我们</h2>
    <div class="join-line"></div>
    <div class="big">
      <div class="left">
        <div class="neirong" @click="selectedTab = 'dashboard'" :class="{ active: selectedTab === 'dashboard' }">
          <a class="nav-text">招新要求</a>
        </div>
        <div class="neirong" @click="selectedTab = 'profile'" :class="{ active: selectedTab === 'profile' }">
          <a class="nav-text">PPT风采展示</a>
        </div>
        <div class="neirong" @click="selectedTab = 'account'" :class="{ active: selectedTab === 'account' }">
          <a class="nav-text">招新视频</a>
        </div>
        <div class="neirong" @click="selectedTab = 'account1'" :class="{ active: selectedTab === 'account1' }">
          <a class="nav-text">招新安排</a>
        </div>
        <div class="neirong" @click="selectedTab = 'account2'" :class="{ active: selectedTab === 'account2' }">
          <a class="nav-text">招新方式</a>
        </div>
      </div>
      <div class="kong"></div>
      <div class="middle">
        <!-- 招新要求 -->
        <div v-if="selectedTab === 'dashboard'" id="Astral">
          <h3 class="arrange">招新要求</h3>
          <div class="time"><p>招新对象</p></div>
          <div class="time-content"><p>计算机科学与技术学院、信息工程学院和软件学院的全体23级学生</p></div>
          <div class="location"><p>招新要求</p></div>
          <div class="time-content"><p>具有自主学习和解决问题的能力等</p></div>
          <img class="corner-image2" src="@/assets/小宇航员.png">
        </div>
        <!-- ppt -->
        <div v-if="selectedTab === 'profile'">
          <h3 >下面展示的是我们的ppt风采展示</h3>
<!--          <input type="file" id="photo-input" accept=".ppt,.pptx">-->
<!--          <button @click="handleUploadPPT">上传PPT</button>-->
        </div>
        <!-- 招新视频 -->
        <div v-if="selectedTab === 'account'">
          <h3 class="video">下面是我们的招新视频</h3>
          <div class="video1">
            <video src="@/assets/招新视频.mp4" controls></video>
          </div>
<!--          <input type="file" id="video-input" accept="video/*">-->
<!--          <button @click="handleUploadVideo">上传视频</button>-->
        </div>
        <!-- 招新安排 -->
        <div v-if="selectedTab === 'account1'">
          <!-- <h2>招新安排</h2> -->
          <h3 class="arrange">请大家看清楚时间和地点哦，避免找不到我们~</h3>
          <div class="time"><p>招新时间</p></div>
          <div class="time-content"><p>待定</p></div>
          <div class="location"><p>招新地点</p></div>
          <div class="location-content">
            <div class="mes"><p>待定</p></div>
            <div class="img"><img src="@/assets/动图.gif"></div>
            </div>
        </div>
        <!-- 招新方式 -->
        <div v-if="selectedTab === 'account2'" class="middle-p">
           <img class="corner-image1" src="@/assets/信封.jpg">
          <img class="corner-image3" src="@/assets/小教师.png">
          <div class="button-container">
          <el-button size="medium" @click="openResumeDialog" class="button">开</el-button>
          </div>
        </div>
      </div>
       <LoginDialog ref="tan1"></LoginDialog>
      <div class="kong"></div>
      <div class="right">
        <img src="https://picnew13.photophoto.cn/20190317/xueshenghuizhaoxinhaibaobeijingsucai-32862687_1.jpg">
      </div>
    </div>
    <resume-dialog ref="resume"></resume-dialog>
  </section>
</template>

<script src="@/ajax/axios-0.18.0.js"></script>
<script>
import ResumeDialog from '@/components/ResumeDialog.vue'
// import { getFile } from "@/api/file.js";
export default {
  name: 'AboutDemo',
  data () {
    return {
      selectedTab: 'dashboard',
      // uploadedPPT: null,
      // uploadedVideo: null
    }
  },

  components:{
    ResumeDialog
  },
  methods:{
    openResumeDialog (){
      this.$refs.resume.open()
    }
  }

  // methods: {
  //   redirectToResumePage() {
  //     // 这里可以添加导航到简历页面的逻辑
  //     const isLoggedIn = false // 假设初始状态为未登录，实际需要根据用户登录状态进行判断

  //     if (isLoggedIn) {
  //       this.$router.push('/resume') // 已登录时跳转到投递简历页面
  //     } else {
  //       this.$router.push('/login') // 未登录时跳转到登录页面
  //     }
  //   },
  // }
}
</script>

<style lang="less" scoped>
.about {
  text-align: center;
  background-color: #f2f2f2;
  padding: 50px;
}
h3 {
  margin: 20px;
  margin-top: 50px;
  color: #000
}
a {
  text-decoration: none;
  color: #000;
}

.joinUs {
 // margin-bottom: 30px;
  font-weight: bold;
}
.join-line {
  width: 40px;
  height: 0;
  border-top: 2px solid #4f74a3;;
  margin: 0 auto;
  margin-bottom: 50px;
}
.video {
margin: 20px;
  margin-top: 50px;
  color: #000
}
.video1 {
  width: 100%;
  height: 400px;
  margin: 0 auto;
  video {
    width: 100%;
    height: 100%;
  }
}

// p {
//   font-size: 16px;
//   color: #666;
// }
.arrange {
  margin: 20px;
  margin-top: 50px;
  color: #000
}
.time {
  width: 30%;
  height: 60px;
  background-color: #4f74a3;
  text-align: center;
  line-height: 60px;
  border: 1px solid transparent;
  border-radius: 0 45% 45% 0;
  p {
    color: #fff
  }
}
.time-content {
  width: 80%;
  height: 100px;
  margin: 0px auto;
  padding-top:20px;
  line-height: 40px;
  p {
    color: #000
  }
}
.location {
  width: 30%;
  height: 60px;
  background-color: #4f74a3;
  text-align: center;
  line-height: 60px;
  border: 1px solid transparent;
  border-radius: 0 45% 45% 0;
  p {
    color: #fff
  }
}
.location-content {
  width: 80%;
  height: 180px;
  margin: 0 auto;
  p {
    color: #000
  }
  div {
    float: left;
  }
  .mes {
    width: 70%;
    height: 100%;
  }
  .img {
    width: 30%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.big {
  display: flex;
  width: 100%;
  height: 520px;
  //background-color: #cccccc;
}

.left {
  height: 516px;
  width: 20%;
  //border: 2px solid #cccccc; /* 添加边框 */
}

.left .neirong.active {
  a {
    color: green;
    font-size: 25px;
  }
}

.neirong {
  height: 80px;
  width: 80%;
  background-color: #d2eefd;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  flex-direction: column-reverse;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.middle h2 {
  font-size: 30px;
  margin-top: 60px;
}

.middle p {
  font-size: 20px;
}
.middle-p {
  position: relative; /* 设置父元素为相对定位 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%; /* 设置父元素高度为100% */
}

.button-container {
  position: absolute; /* 设置按钮容器为绝对定位 */
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%); /* 使用transform属性将按钮容器居中 */
  width: 10%;
  height:13%;
  .button{
    width: 100%;
    height: 100%;
    font-size: 20px;
    background-color:burlywood;
    border-radius: 50%;
  }
}
.kong {
  width: 2%;
  height: 520px;
}

.middle {
  width: 56%;
  height: 520px;
  background-color: white;
  position: relative;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.right {
  height: 520px;
  width: 20%;
  //background-color: #d05723;
  display: flex;
  justify-content: flex-end;
}

.right img {
  width: 100%;
  height: 100%;
  object-fit: cover;

}

//.email {
//  width: 60px;
//  height: 60px;
//  margin-top: 300px;
//  margin-left: 650px;
//}

//.email img {
//  width: 100%;
//  height: 100%;
//  object-fit: cover;
//}
.middle #Astral {
  width: 100%;
  height: 100%;
  margin-top: -50px;
  //background-color: rgb(13, 17, 23);
  // background-color: #d2eefd;
  color: white;
  background-image: url("@/assets/bg-stars.png");
  background-size: 100%;
}
.middle #Astral .arrange{
  padding-top:40px;
  padding-bottom: 30px;
  font-size: 30px;
}
.middle .corner-image1 {
  width: 100%;
  height: 520px;
}

.middle .corner-image2 {
  bottom: 0;
  right: 0;
  width: 30%;
  position: absolute;
}
.middle .corner-image3 {
  bottom: 0;
  right: 0;
  width: 75%;
  position: absolute;
}

.nav-text {
  color: #42b983;
}

</style>
