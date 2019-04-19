import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './components/IndexPage'
import Show from './components/ShowPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path : "/",
      name : "index",
      component: Index
    },
    {
      path : "/:id",
      name : "show",
      component: Show
    }
  ]
})
