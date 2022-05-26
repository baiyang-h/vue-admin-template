const { defineConfig } = require('@vue/cli-service')
// const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: 'BASE_URL - 会和 vue.config.js 中的 publicPath 选项相符，即你的应用会部署到的基础路径',

  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  lintOnSave: false,

  css: {
    loaderOptions: {
      scss: {
        //全局样式
        additionalData: `@import "~@/styles/variables.scss";`
      }
    }
  },

  configureWebpack: {
    resolve: {
      alias: {
        // styles: path.resolve(__dirname, './src/styles'),
        // assets: path.resolve(__dirname, './src/assets'),
        // api: path.resolve(__dirname, './src/api'),
        // layout: path.resolve(__dirname, './src/layout'),
        // store: path.resolve(__dirname, './src/store'),
        // router: path.resolve(__dirname, './src/router'),
        // libs: path.resolve(__dirname, './src/libs'),
        // views: path.resolve(__dirname, './src/views'),
        // config: path.resolve(__dirname, './src/config'),
      },
      fallback: {
        path: require.resolve("path-browserify")
      }
    },
  },

  devServer: {
    // 可以本地创建一个mock文件，然后在本地启动开发环境之前启动node 服务时模拟mock，，  这里暂时不适用了，直接使用部署到阿里云的远程easy-mock了
    // before: require('./mock/mock-server'),

    proxy: {
      '/h': {
        target: ' http://47.99.60.91:7300/mock/628ef71df64e0a71479476d9/h',
        ws: true,
        changeOrigin: true,
        // pathRewrite: {
        //   '^/api': '',
        // },
        router: {},
      },
    }
  }

})
