module.exports = {
  outputDir: 'dist',
  productionSourceMap: false,
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.output
      .filename('js/[name].js')
  
      config.output
      .chunkFilename('js/vendor.js');
  
      config.plugin('extract-css')
      .tap(args => {
        args[0].filename = 'css/[name].css';
        args[0].chunkFilename = 'css/vendor.css';
        return args;
      });  
    }
  }
};