
// HtmlWebpackplugin: html 파일을 받아서 bundling 파일에 ouput으로 내보낼 때 사용될 html 생성 or 템플릿화 해줌
// 사용법은 해당 문서 참고
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // 웹 서버 띄우기 위한 설정(dev server)
    devServer:{
        // 압축해라.
        compress: true,
        // 포트번호
        port: 9999,
    },
    module: {
        // 로더 지정
        rules:[
            {
                // js 파일만 처리하도록
                test: /\.js$/,
                // 트랜스파일 대상이 아닌 특정 디렉토리 제외
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // bable의 플러그인
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    },
    // html-webpack-plugin
    plugins: [
        new HtmlWebpackPlugin({
            title: '2.2 객체 to DOM Render',
            // 어떤 html 파일을 쓸 건지 지정
            template: 'index.html'
        })
    ]
}