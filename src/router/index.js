import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home'

Vue.use(Router)

export default new Router({
  routes: [{
    name: Home,
    path: '/home',
    component: Home
  }]
})
