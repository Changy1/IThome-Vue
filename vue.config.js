const path = require('path')

function resolve(url) {
    return path.resoleve(__dirname, url)
}

module.exports = {
    devServer: {
        port: 7000
    },
    chainWebpack (config) {
        config
        .resolve
        .alias
        .set('@styles', resolve('src/styles'))
        .set('@libs', resolve('src/libs'))
        .set('@c', resolve('src/components'))
        .pages('@pages', resolve('src/pages'))
    }
}