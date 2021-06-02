import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../views/login'
import ErrorLog from '../views/ErrorLog/errorLog'
import SimilarRank from '../views/SimilarRank/similarRank'
import FileMessage from '../views/FileMessage/fileMessage'
import Project from '../views/Project/project'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'Login',
      // component: Login
      name: 'Project',
      component: Project
    },
    // {
    //   path: '/error',
    //   name: 'ErrorLog',
    //   component: ErrorLog
    // }
    {
      path: '/error',
      name: 'ErrorLog',
      component: ErrorLog
    },
    {
        path: '/rank',
        name: 'SimilarRank',
        component: SimilarRank
    },
    {
      path: '/msg',
      name: 'FileMessage',
      component: FileMessage
    }
  ]
})
