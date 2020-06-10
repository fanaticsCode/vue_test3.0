const path = require('path');



const resolve = dir => {
    return path.join(__dirname, dir)
}
  

//const VueConf = require('./src/assets/js/libs/vue_config_class')
//const vueConf = new VueConf(process.argv)
module.exports = {
	// 项目部署基础
	// 默认情况下，我们假设你的应用将被部署在域的根目录下,
	// 例如：https://www.my-app.com/
	// 默认：'/'
	// 如果您的应用程序部署在子路径中，则需要在这指定子路径
	// 例如：https://www.foobar.com/my-app/
	// 需要将它改为'/my-app/'
    publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
	
    outputDir: 'dist',// 在npm run build时 生成文件的目录 type:string, default:'dist'
	
    indexPath: "index.html", //指定生成的index.html 输出路径 相对 default: index.html

    // tweak internal webpack configuration.
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    // 如果你不需要使用eslint，把lintOnSave设为false即可
    lintOnSave: false,
	
    // webpack 配置进行更细粒度的修改  https://cli.vuejs.org/zh/config/#chainwebpack
    chainWebpack: config => {
        config.resolve.alias
        .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
        .set('_c', resolve('src/components'))
    },
    
	// 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
    devServer: {
        // open: true,
        // host: '0.0.0.0',
        // port: 8080,
        // https: false,
        // hotOnly: false,
        // proxy: null,
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
        // proxy: {
        //     '/api': {
        //         target: '<url>',
        //         ws: true,
        //         changeOrigin: true
        //     },
        //     '/foo': {
        //         target: '<other_url>'
        //     }
        // },

    }
}
