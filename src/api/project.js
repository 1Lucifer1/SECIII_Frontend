import { axios } from '../utils/request'

const api = {
  logPre: '/api/project'
}
export function getProjectListAPI(){
  console.log("api");
  return axios({
    url: `${api.logPre}/getAllProjects`,
    method: 'GET'
  })
}
