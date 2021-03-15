import axios from 'axios'
import { Notify } from 'vant'
import { VueAxios } from './axios'
import Vue from 'vue'
import store from '../store'

const requests = axios.create({
  baseURL:'http://localhost:30001',
  timeout:6000
})

const err = (error) =>{
  if(error.response){
    const data = error.response.data
    // const token = Vue.ls.get(ACCESS_TOKEN)
    if(error.response.status === 403){
      Notify({type:'danger',message:data.message||data.msg});
    }
    if(error.response.status === 401){
      Notify({type:'danger',message:'你没有权限。'});
    }
    // if(token){
    //   store.dispatch('Logout').then(()=>{
    //     setTimeout(()=>{
    //       window.location.reload()
    //     },1500)
    //   })
    // }
  }
  return Promise.reject(error);
}

//请求拦截器
requests.interceptors.request.use(config => {
  // const token = Vue.ls.get(ACCESS_TOKEN)
  const token = localStorage.getItem('token')
  if(token){
    config.headers['token'] = token
  }
  return config;
})

//接收拦截器
requests.interceptors.response.use(response =>{
  const res = response.data;
  if(res.code !== 0 && res.code !== 200){
    Notify({type: 'danger',message:res.message||res.msg});
    if(res.code === 401||res.code === 403||res.code===999){
      Notify({type:'danger',message:'请登录'});
    }
    return Promise.reject('error');
  }else{
    return res;
  }
},err)

const installer = {
  vm: {},
  install (Vue) {
    Vue.use(VueAxios, requests)
  }
}

export {
  installer as VueAxios,
  requests as axios
}

