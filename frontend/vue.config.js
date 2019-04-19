// 'use strict'
module.exports = {
	devServer: { 
		proxy: { // proxyTable 설정
			'/api': {
				target: 'http://localhost:3000/api',
				changeOrigin: true	,
				pathRewrite:{
					"^/api" : ''
				}
			}
		}
	}
}


// outputDir : path.resolve(__dirname, "../backend/public/"),
// var path = require("path")