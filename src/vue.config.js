const target = 'http://127.0.0.1:8001';

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