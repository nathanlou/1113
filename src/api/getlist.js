import request from '@/utils/request'
import { getToken, setToken, removeToken } from '@/utils/auth'

export function equipment_list(data) {
  console.log("getToken()"+getToken())
  return request({
    url: '/sbgl/deviceInfor_listData',
    method: 'post',
	params:data
  })
}