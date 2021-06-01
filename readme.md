# 特性
- mpa, csr&ssr
- webpack5, vue2.x, babel8.x, css, scss
- 支持history模式（需在start.js中配置）
- 默认所有页面支持vw（不需要支持的页面需要在postcss.config.js中配置）
- 其他
  - 文件夹快捷引入
    - src文件夹 @
    - static文件夹 @static

# 约定
- 开发文件目录为src目录，每个目录都是一个vue单页应用。
- 按照页面的耦合程度进行判断，一个路由页作为一个单页应用还是多页路由页作为一个单页应用。
- 其他
  - 当前src中home目录为ssr页面目录

# 开发过程遇到的问题
## 无法热更新的问题 "webpack-hot-middleware": "^2.25.0",
- 系webpack5的bug
- 解决方法安装
  - "webpack-hot-middleware": "git+https://github.com/lukeapage/webpack-hot-middleware#2cdfe0d0111dab6432b8683112fd2d17a5e80572"

## [vue-server-renderer-webpack-plugin] webpack config `output.libraryTarget` should be "commonjs2".
- 解决方法
  - https://github.com/vuejs/vue/issues/11718

## chunkFilename 使用[runtimeName]/[name].[chunkhash:8].js 导致运行时无法加载chunk文件
- 解决办法
  - 使用函数命名的形式
    - ```
      chunkFilename: (pathData) => {
        const runtimeName = pathData.chunk.runtime
        return `${runtimeName}/[name].[chunkhash:8].js`
      }
      ```
## 单独引入样式文件时，import 'style.css' 与 import('style.css') 是有差异的。
- 前者是bunddle, 后者是chunk并且将内联在js中

