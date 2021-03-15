import { axios } from '../utils/request'

const api = {
  adminPre: '/api/admin'
}
export function getFileMessageAPI(){
  return axios({
    url: `${api.adminPre}/getFileMessage`,
    method: 'GET'
  })
}
