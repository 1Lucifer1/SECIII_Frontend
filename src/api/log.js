import { axios } from '../utils/request'

const api = {
  logPre: '/api/report'
}
export function getErrorLogListAPI(fileIndex){
  console.log("api");
  return axios({
    url: `${api.logPre}/getAllReportsByProjectIndex/${fileIndex}`,
    method: 'GET'
  })
}
