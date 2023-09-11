// import request from '@/utils/request'
// export const getNavbar = () => {
//   return request.get('/top/getTop')
// }

import request from '@/utils/request'

export const getFile = async (userId, file) => {
  try {
    const uploadSuccess = async (response, file, fileList) => {
      // 从响应中获取上传后的文件信息
      const uploadedFile = response.data

      // 构建请求数据
      const requestData = {
        // 这里是其他需要传递的请求数据
        file: uploadedFile
      }
      const postResponse = await request.post(`/file/insertFiles/${userId}`, requestData)
      const data = postResponse.data
      return data
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}
