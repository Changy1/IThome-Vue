const path = require('path')

function resolve(url) {
    return path.resolve(__dirname, url)
}

module.exports = {
    devServer: {
        port: 7000,
        proxy: {
            '/ithome' : {
                target: 'https://m.ithome.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/ithome': ''
                }
            },
            '/mz': {
                target: 'https://m.maizuo.com/',
                changeOrigin: true,
                pathRewrite: {
                  '^/mz': ''
                }
            }
        }
    },
    chainWebpack (config) {
        config
        .resolve
        .alias
        .set('@styles', resolve('src/styles'))
        .set('@libs', resolve('src/libs'))
        .set('@c', resolve('src/components'))
        .set('@pages', resolve('src/pages'))
    }
}