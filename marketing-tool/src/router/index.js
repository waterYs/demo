import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import toolHome from '../components/marketing-tool/tool-home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'toolHome',
      component: toolHome
    }
  ]
})
