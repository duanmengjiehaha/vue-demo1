z<template>
  <div>
    <!--  <el-dialog title="Login" :visible.sync="dialogVisible" width="30%" @before-close="closeDialog">-->
    <el-dialog title="登录" :visible.sync="show" width="30%">
      <el-form ref="loginForm" :model="loginData" :rules="loginRules" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginData.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog :visible.sync="successVisible" title="登录成功" width="300px">
      <p>登录成功！</p>
      <div slot="footer">
        <el-button type="primary" @click="redirectToLogin">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

import { Dialog, Form, FormItem, Input, Button } from 'element-ui'

export default {
  name: 'LoginDialog',
  comments: {
    Dialog, Form, FormItem, Input, Button
  },
  data () {
    return {
      // dialogVisible: true,
      show: false,
      successVisible: false,
      loginData: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          // Perform login action or API request
          this.showSuccessDialog()
          console.log('Login successful')
          this.resetLoginForm()
        } else {
          console.log('Form validation failed')
        }
      })
    },
    showSuccessDialog () {
      this.show = false
      this.successVisible = true
      console.log('展示成功')
    },
    redirectToLogin () {
      this.successVisible = false
    },
    open () {
      this.show = true // Close the dialog
    },
    resetLoginForm () {
      this.$refs.loginForm.resetFields()
      Object.assign(this.loginData, {
        username: '',
        password: ''
      })
    }
  }
}
</script>
<style scoped lang="less">
</style>
