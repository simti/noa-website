module.exports = {
  publicPath: '/',
  devServer: {
    port: 8080,
    host: '0.0.0.0'
  },
  configureWebpack: {
    // It will be merged into the final Webpack config
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  }
}
