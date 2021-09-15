module.exports = {
  entry: './src/index.js',
  output: {
    // 虚拟打包路径，文件不会真正的生成，而是在9000端口下的虚拟文件
    publicPath:'xuni',
    // 打包出来的文件名
    filename: 'bunlde.js'
  },
  devServer: {
    port: 9000,
    // 开启服务静态资源文件夹
    contentBase: 'www'
  }
}