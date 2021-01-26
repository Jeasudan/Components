const Mock = require('mockjs');
//格式： Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/api/tableData', 'get', require('./table/tableData'));
Mock.mock('/api/treeData', 'get', require('./tree/treeData'));