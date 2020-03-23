const path = require('path')

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('components', path.resolve(__dirname, './src/components'))
            .set('pages', path.resolve(__dirname, './src/views'))
            .set('assets', path.resolve(__dirname, './src/assets'))
            .set('utils', path.resolve(__dirname, './src/utils'))
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'https://m.toutiao.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/dianying': {
                target: 'https://m.maoyan.com',
                changeOrigin: true
              },
        },
    }
}