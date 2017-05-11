import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/components/Index'
import Forbid from '@/components/Forbid'
import Flow from '@/components/Flow'
import Dots from '@/components/Dots'
import Query from '@/components/Query'
import Apply from '@/components/Apply'
import Rules from '@/components/Rules'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/forbid',
      name: 'Forbid',
      component: Forbid
    },
    {
      path: '/flow',
      name: 'Flow',
      component: Flow
    },
    {
      path: '/dots',
      name: 'Dots',
      component: Dots
    },
    {
      path: '/query',
      name: 'Query',
      component: Query
    },
    {
      path: '/apply',
      name: 'Apply',
      component: Apply
    },
    {
      path: '/rules',
      name: 'Rules',
      component: Rules
    }
  ]
})
