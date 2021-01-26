// const express = require('express')
// const app = express()
// const  tableData = require('./src/mock/table/tableData.json')
// const  treeData = require('./src/mock/tree/treeData.json')
// const routes = express.Router()
// app.use('/api', routes)
module.exports = {
    devServer: {
        open: true,
        // before(app) {
        //     app.get('/api/tableData', function (req, res) {
        //       res.json({
        //         errno: 0,
        //         data: tableData
        //       });
        //     });
        //     app.get('/api/treeData', function (req, res) {
        //       res.json({
        //         errno: 0,
        //         data: treeData
        //       });
        //     });
        
        //   },
        //   proxyTable: {
        //     '/api/':'http://localhost:8080'//代理配置
        //   },
    }
}