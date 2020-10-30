import Vue from 'vue'
import Router from 'vue-router'

import Wrap from '../views/wrap.vue'
import Home from '../views/Home/firstLook.vue'
import DragTable from '../views/Tables/dragTable.vue'

Vue.use(Router)

export default new Router({
    routes:[
        // {
        //     path:'/home',
        //     name:'Home',
        //     // meta: {title: '自述文件'},
        //     // component:resolve => require(['../views/Home/firstLook.vue'],resolve)
        //     component:Home
        // },
        {
            path:'/',
            name:'Wrap',
            redirect:'/home',
            // meta: {title: '自述文件'},
            // component:resolve => require(['../views/Home/firstLook.vue'],resolve)
            component:Wrap,
            children:[
                {
                    path:'/home',
                    name:'Home',
                    // meta: {title: '自述文件'},
                    // component:resolve => require(['../views/Home/firstLook.vue'],resolve)
                    component:Home
                },
                {
                    path:'/dragTable',
                    name:'DragTable',
                    // meta: {title: '自述文件'},
                    // component:resolve => require(['../views/Home/firstLook.vue'],resolve)
                    component:DragTable
                }
            ]
        },
        
    ]
})









