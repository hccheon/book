const target = 'http://203.254.143.87:8001';

module.exports = {
    devServer: {
        port: 8080,
        proxy: {
            '^/apiget': {
                target,
                changeOrigin: true,
                secure: false
            },
        }
    }
}