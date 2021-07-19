module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:5000',
                // target: process.env.VUE_APP_API_BASE_URL,
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    }
}