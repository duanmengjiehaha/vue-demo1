<template>
  <div>
    <el-dialog :visible.sync="dialogVisible" title="注册" width="450px">
      <el-form ref="registrationForm" :model="form" :rules="formRules" label-width="90px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="realPassword">
          <el-input type="password" v-model="form.realPassword"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名" prop="realName">
          <el-input v-model="form.realName"></el-input>
        </el-form-item>
        <el-form-item label="班级" prop="classes">
          <el-input v-model="form.classes"></el-input>
        </el-form-item>
        <el-form-item label="年级" prop="grade">
          <el-input v-model="form.grade"></el-input>
        </el-form-item>
        <el-form-item label="专业" prop="profession">
          <el-input v-model="form.profession"></el-input>
        </el-form-item>
        <el-form-item label="学院" prop="college">
          <el-input v-model="form.college"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="电子邮件" prop="email">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="博客">
          <el-input v-model="form.blog"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitForm">注册</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="successVisible" title="注册成功" width="300px">
      <p>注册成功！</p>
      <div slot="footer">
        <el-button type="primary" @click="redirectToLogin">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>

import { Dialog, Form, FormItem, Input, Button, MessageBox } from 'element-ui'

export default {
  data () {
    return {
      dialogVisible: false,
      successVisible: false,
      name: 'SignDialog',
      comments: {
        Dialog, Form, FormItem, Input, Button, MessageBox
      },
      form: {
        username: '',
        password: '',
        realPassword: '',
        realName: '',
        classes: '',
        grade: '',
        profession: '',
        college: '',
        phone: '',
        email: '',
        blog: ''
      },
      formRules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        realPassword: [{ required: true, message: '请确认密码', trigger: 'blur' },
          { validator: this.validatePasswordConfirmation, trigger: 'blur' }],
        realName: [{ required: true, message: '请输入您的真实姓名', trigger: 'blur' }],
        classes: [{ required: true, message: '请输入您的班级', trigger: 'blur' }],
        grade: [{ required: true, message: '请输入您的年级', trigger: 'blur' }],
        profession: [{ required: true, message: '请输入您的专业', trigger: 'blur' }],
        college: [{ required: true, message: '请输入您的学院', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入您的电话号码', trigger: 'blur' }],
        email: [{ required: true, message: '请输入您的电子邮箱', trigger: 'blur' }]
      }
    }
  },
  methods: {
    open () {
      this.dialogVisible = true
    },
    validatePasswordConfirmation (rule, value, callback) {
      if (value !== this.form.password) {
        callback(new Error('请再次确认您的密码'))
      } else {
        callback()
      }
    },
    submitForm () {
      this.$refs.registrationForm.validate(valid => {
        if (valid) {
          // 注册成功
          console.log('Registration successful')
          this.showSuccessDialog()
          this.dialogVisible = false
          this.resetForm()
        } else {
          console.log('Form validation failed')
        }
      })
    },
    resetForm () {
      this.$refs.registrationForm.resetFields()
      Object.assign(this.form, {
        username: '',
        password: '',
        realPassword: '',
        realName: '',
        classes: '',
        grade: '',
        profession: '',
        college: '',
        phone: '',
        email: '',
        blog: ''
      })
    },
    showSuccessDialog () {
      this.dialogVisible = false
      this.successVisible = true
      console.log('展示成功')
    },

    redirectToLogin () {
      this.successVisible = false
      // Redirect to login dialog or perform any other action
    }
  }
}
</script>
<style scoped lang="less">

</style>
