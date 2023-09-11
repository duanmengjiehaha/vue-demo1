<template>
  <div>
    <header>
      <nav>
        <div class="grouplogo">
          <img src="../assets/logo_nav2.png" alt="Logo" />
        </div>
        <ul>
          <!-- <li><img src="../assets/logo_nav2.png" alt="Logo"></li> -->
          <li>
            <router-link to="/" active-class="underline-link">简介</router-link>
          </li>
          <li>
            <router-link to="/about" active-class="underline-link"
              >团队概况</router-link
            >
          </li>
          <li>
            <router-link to="/daily" active-class="underline-link"
              >日常</router-link
            >
          </li>
          <li>
            <router-link to="/study" active-class="underline-link"
              >学习方向</router-link
            >
          </li>
          <li>
            <router-link to="/join" active-class="underline-link"
              >招新宣传</router-link
            >
          </li>
        </ul>
        <el-button class="littlebtn1" size="medium" @click="openLoginDialog"
          >登录</el-button
        >
        <el-button class="littlebtn2" size="medium" @click="openSignDialog"
          >注册</el-button
        >
      </nav>
    </header>
    <router-view></router-view>
    <LoginDialog ref="tan1"></LoginDialog>
    <SignDialog ref="tan2"></SignDialog>
    <footer>
      <div class="groupfooter">
        <p>备案号:xxxxxxxxxxx</p>
        <p>版权所有 &copy; 2023 小组官网</p>
        <p>技术支持:河南级数信息科技有限公司</p>
        <p>名称：星火小组2023小组官网</p>
      </div>
      <div class="schoolfooter">
        <p>HENAN INSTITUTE OF SCIENCE AND TECHNOLOGY</p>
        <p>地址：河南省新乡市华兰大道东段90号 邮编：453003</p>
      </div>
      <div class="divline"></div>
      <img src="../assets/logo_nav.png" alt="Logo1" />
      <img src="../assets/schoollogo1.png" alt="Logo2" class="schoollogo" />
    </footer>
  </div>
</template>

<script>
// import '@/utils/element-ui'
import LoginDialog from '@/components/LoginDialog.vue'
import SignDialog from '@/components/SignDialog.vue'

import { Button } from 'element-ui'

export default {
  components: {
    'el-button': Button,
    LoginDialog,
    SignDialog
  },
  mounted () {
    this.$nextTick(() => {
      // console.log(this.$refs.dialog)
    })
  },
  methods: {
    openLoginDialog () {
      this.$refs.tan1.open()
    },
    openSignDialog () {
      this.$refs.tan2.open()
    },
    closeDialog () {
      console.log('showLoginDialog = false')
    }
  }
}
</script>

<style lang="less">
body {
  //background-image: url('../assets/home_bg.png');
  padding: 0;
  margin: 0;
}
nav {
  /* background-image: url('@/assets/home7.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center; */
  // background-image: url('../assets/home_bg.png');
  position: relative;
  height: 400px;
  background-color: #333;
  color: #fff;
  //background-color: #333;
  // vertical-align: middle;
  /* padding: 10px; */
  /* //display: left */
}
nav img {
  // vertical-align: middle;
  width: 200px;
  height: auto;
  margin-right: 50px;
}

nav ul {
  display: inline-block;
  list-style-type: none;
  vertical-align: middle;
  margin-top: 34px;
}

li {
  display: inline;
  margin-right: 50px;
}

a {
  color: #fff;
  text-decoration: none;
  position: relative;
}
nav .grouplogo {
  position: absolute;
  top: 0px;
  left: 200px;
}
nav .littlebtn1 {
  // margin-top: 60px;
  position: absolute;
  top: 30px;
  right: 300px;
}
nav .littlebtn2 {
  // margin-top: 60px;
  position: absolute;
  top: 30px;
  right: 200px;
}
nav ul li a.underline-link::after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 17%;
  width: 60%;
  height: 2px;
  background-color: #4f74a3;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

nav ul li a.underline-link:hover::after,
nav ul li a.underline-link.router-link-exact-active::after {
  transform: scaleX(1);
}
#tan {
  background-color: red;
  width: 300px;
  height: 300px;
  display: flow;
}
footer {
  background-color: #333;
  color: #f3f1f1bd;
  // display: flex;
  // align-items: center;
  // justify-content: space-between;
  padding: 20px;
  padding-top: 35px;
  text-align: center;
  height: 200px;
}
footer p {
  position: relative;
}

footer img {
  position: absolute;
  //float: right;
  margin-left: 0px;
  margin-top: 20px;
  width: 200px;
}
footer .schoollogo {
  position: absolute;
  margin-left: -600px;
  margin-top: 20px;
  width: 100px;
}
footer .schoolfooter {
  position: absolute;
  margin-left: 300px;
  margin-top: 35px;
}
footer .groupfooter {
  position: absolute;
  margin-left: 1000px;
  margin-top: -10px;
}
.divline {
  position: absolute;
  width: 2px;
  height: 150px;
  border-left: 2px solid rgb(168, 167, 167);
  margin-left: 720px;
  margin-top: 0px;
}
</style>
