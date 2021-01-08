import Vue from 'vue'
import Router from 'vue-router'

import Wrap from '../views/wrap.vue'
import Home from '../views/Home/home.vue'
import DragTable from '../views/Tables/dragTable.vue'
import ActiveColumn from '../views/Tables/activeColumn.vue'
import AsyncTreeData from '../views/Tables/asyncTreeData.vue'
import CombinePage from '../views/Tables/combinePage.vue'
import RadioTree from '../views/Tree/radioTree.vue'
import DynamicForm from '../views/Form/dynamicForm.vue'




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
            name:'Wrap',  //框架
            redirect:'/home',
            // meta: {title: '自述文件'},
            // component:resolve => require(['../views/Home/firstLook.vue'],resolve)
            component:Wrap,
            children:[
                {
                    path:'/home',  //首页
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
                },
                {
                    path:'/activeColumn', 
                    name:'ActiveColumn',
                    // meta: {title: '自述文件'},
                    // component:resolve => require(['../views/Home/firstLook.vue'],resolve)
                    component:ActiveColumn
                },
                {
                    path:'/asyncTreeData', 
                    name:'AsyncTreeData',
                    // meta: {title: '自述文件'},
                    // component:resolve => require(['../views/Home/firstLook.vue'],resolve)
                    component:AsyncTreeData
                },
                {
                    path:'/combinePage', 
                    name:'CombinePage',
                    // meta: {title: '自述文件'},
                    // component:resolve => require(['../views/Home/firstLook.vue'],resolve)
                    component:CombinePage
                },
                {
                    path:'/radioTree', 
                    name:'RadioTree',
                    // meta: {title: '自述文件'},
                    // component:resolve => require(['../views/Home/firstLook.vue'],resolve)
                    component:RadioTree
                },
                {
                    path:'/dynamicForm', 
                    name:'DynamicForm',
                    // meta: {title: '自述文件'},
                    // component:resolve => require(['../views/Home/firstLook.vue'],resolve)
                    component:DynamicForm
                },
            ]
        },
        
    ]
})









