import Vue from 'vue'
import Router from 'vue-router'

import Wrap from '../views/wrap.vue'
import Home from '../views/Home/home.vue'
import DragTable from '../views/Tables/dragTable.vue'
import ActiveColumn from '../views/Tables/activeColumn.vue'
import AsyncTreeData from '../views/Tables/asyncTreeData.vue'
import CombinePage from '../views/Tables/combinePage.vue'
import RadioTree from '../views/Tree/radioTree.vue'
import FunctionTree from '../views/Tree/functionTree.vue'
import ElementTree from '../views/Tree/elementTree.vue'
import DynamicForm from '../views/Form/dynamicForm.vue'
import InputSelect from '../views/Select/inputSelect.vue'
import TreeSelect from '../views/Select/treeSelect.vue'
import IviewTreeSelect from '../views/Select/iview-tree-select.vue'
import VueDragable from '../views/Dragable/vueDragable.vue'
import Sortablejs from '../views/Dragable/sortablejs.vue'
import InputSearchModal from '../views/input/inputSearchModal.vue'



Vue.use(Router)

export default new Router({
	routes:[
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
					path:'/functionTree', 
					name:'FunctionTree',
					// meta: {title: '自述文件'},
					// component:resolve => require(['../views/Home/firstLook.vue'],resolve)
					component:FunctionTree
				},
				{
					path:'/elementTree', 
					name:'ElementTree',
					// meta: {title: '自述文件'},
					// component:resolve => require(['../views/Home/firstLook.vue'],resolve)
					component:ElementTree
				},
				{
					path:'/dynamicForm', 
					name:'DynamicForm',
					// meta: {title: '自述文件'},
					// component:resolve => require(['../views/Home/firstLook.vue'],resolve)
					component:DynamicForm
				},
				{
					path:'/inputSelect', 
					name:'InputSelect',
					// meta: {title: '自述文件'},
					// component:resolve => require(['../views/Home/firstLook.vue'],resolve)
					component:InputSelect
				},
				{
					path:'/treeSelect', 
					name:'TreeSelect',
					// meta: {title: '自述文件'},
					// component:resolve => require(['../views/Home/firstLook.vue'],resolve)
					component:TreeSelect
				},
				{
					path:'/iviewTreeSelect', 
					name:'IviewTreeSelect',
					// meta: {title: '自述文件'},
					// component:resolve => require(['../views/Home/firstLook.vue'],resolve)
					component:IviewTreeSelect
				},
				{
					path:'/vueDragable', 
					name:'VueDragable',
					// meta: {title: '自述文件'},
					// component:resolve => require(['../views/Home/firstLook.vue'],resolve)
					component:VueDragable
				},
				{
					path:'/sortablejs', 
					name:'Sortablejs',
					// meta: {title: '自述文件'},
					// component:resolve => require(['../views/Home/firstLook.vue'],resolve)
					component:Sortablejs
				},
				{
					path:'/inputSearchModal', 
					name:'InputSearchModal',
					// meta: {title: '自述文件'},
					// component:resolve => require(['../views/Home/firstLook.vue'],resolve)
					component:InputSearchModal
				},
			]
		},
			
	]
})









