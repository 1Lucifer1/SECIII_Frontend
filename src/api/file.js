import {axios} from '../utils/request'

const api = {
  filePre: '/api/file'
}
export function getFileMessageAPI(fileIndex){
  return axios({
    url: `${api.filePre}/readFile/${fileIndex}`,
    method: 'GET'
  })
}