import Vue from 'vue'
import Router from 'vue-router'
// 导入elementui组件
import Elementui from '@/views/Elementui'
// 引入处理element-ui的css文件
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Elementui',
      name: 'Elementui',
      component: Elementui
    },
    {
      path:'/',
      redirect: '/Elementui'
    }
  ]
})
