<template>
    <div>
  <el-dialog v-if='haveuser==false' :visible.sync="successVisible" title="提示" width="300px">
      <p>您还没有登录！</p>
      <p>请先登录</p>
      <div slot="footer">
        <el-button type="primary" @click="close">确定</el-button>
      </div>
    </el-dialog>
    <el-dialog  v-if='haveuser==true' :visible.sync="successVisible" title="简历投递" width="500px">
        <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        accept=".doc,.docx,application/msword,applicationnd.openxmlformats-officedocument.wordprocessingml.document"
        multiple
        :on-success="uploadSuccess">
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    <div class="el-upload__tip" slot="tip">文件不能太大</div>
    </el-upload>
    </el-dialog>
    </div>
</template>

<script>
import { getFile } from '@/api/file.js'

export default {
  data () {
    return {
      haveuser: true,
      successVisible: false
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    open () {
      this.successVisible = true
    },
    close () {
      this.successVisible = false
    },
    async uploadSuccess (response, file, fileList) {
      try {
        const userId = 123 // 假设你有一个 userId
        const data = await getFile(userId, file)
        console.log(data)// 处理返回的数据
      } catch (error) {
        console.error(error)
        // 处理错误情况
      }
    },
    async fetchData () {
      try {
        // const userId = '1'
        // const response = await getFile(userId)
        // // 处理响应数据
        // console.log(response.data)

        // this.images = response.data
      } catch (error) {
        // 处理错误
        console.error(error)
      }
    }

  }
}
</script>

<style>

</style>
