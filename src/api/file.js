import {axios} from '../utils/request'

const api = {
  filePre: '/api/file',
  projectPre: '/api/project'
}
export function getFileMessageAPI(fileIndex){
  console.log("api");
  return axios({
    url: `${api.filePre}/readFile/${fileIndex}`,
    method: 'GET'
  })
}
export function getSimilarityRankAPI(reportIndex){
  console.log("api");
  return axios({
    url: `${api.filePre}/localizationOfBugReport/${reportIndex}`,
    method: 'GET'
  })
}
export function getEvalutionAPI(projectIndex){
  console.log("api");
  return axios({
    url: `${api.projectPre}/getIndicatorEvaluation/${projectIndex}`,
    method: 'GET'
  })
}
