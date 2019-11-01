
export default {
  mode: 'universal', //  当前渲染使用模式
  /*
  ** Headers of the page
  */
  head: { //  页面head配置信息
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    // Run the middleware/user-agent.js on every page
    mode: 'hash'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' }, //  页面进度条 颜色
  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/dist/antd.css',
    '~/assets/css/common.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [ // 插件
    '@/plugins/antd-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  // styleResources: {
    // scss: './assets/variables.scss',
    // less: './assets/**/*.less',
    // css: '~/assets/css/common.css',
    // sass: ...
  // },
  /*
  ** Build configuration
  */
  build: {
    // loaders:[
    //   {
    //     test:/\.(png|jpe?g|gif|svg)$/,
    //     loader:"url-loader",
    //     query:{
    //       limit:10000,
    //       name:'img/[name].[hash].[ext]'
    //     }
    //   }
    // ],
    /*
    ** You can extend webpack config here
    */
    extend (config, text) {
      // if (isDev && isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    }
  }
}
