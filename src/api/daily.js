// import request from '@/utils/request'
// export const getDaily = (type) => {
//   return request.get(`/activity/selectActivity/${type}`)
// }

import request from '@/utils/request'

export const getDaily = async (type) => {
  try {
    const response = await request.get(`/activity/selectActivity/${type}`)
    const data = response.data
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}
