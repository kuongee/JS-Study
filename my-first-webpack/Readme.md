# My First Webpack
> Jakob Lind의 Email Course를 따라하고 정리 <br>
> https://createapp.dev/ <br>
> https://createapp.dev/webpack-course

### Webpack?
- 웹앱에는 JavaScript 파일들과 dependencies가 많이 있다.
- 그래서 단순히 <span>\<script></span> 태그로 일일이 import 하는데에는 한계가 있다. 그리고 HTTP 왕복 통신도 많이 필요하다.

그래서 Webpack을 사용한다.
- Webpack을 쓰면 각 JS 파일들은 "module"이 된다.
- Webpack은 모들 모듈들 + dependencies를 하나의 큰 파일로 만든다. => 큰 파일을 bundle이라 한다. (한번의 왕복으로 로딩이 가능 / script 태그 한 개로 import 가능)
- ES6, React jsx와 같은 새로운 기능들도 브라우저가 이해할 수 있는 JS 코드로 transpile 해준다. (Babel 같은 플러그인을 사용해서)
- 그리고 minify(불필요한 코드 다 지워버림) / uglify(변수도 간단하게)로 앱을 빠르게 할 수도 있다.

### Webpack bundle 만들어보자
기본으로도 minify/uglify 되지만, webpack config에 따라 강화된다.

- NPM project 생성
```
npm init -y
```
package.json이 생성된다. <br>
: name, version, project dependencies들이 작성된다.

- Webpack dendencies 설치 <br>
wepack, webpack-cli

### webpack.config.js 파일 만들어보자
webpack.config.js는 그냥 js 파일이다.
```js
const webpack = require("webpack");
const path = require("path");
const config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    // 브라우저가 JS코드만 이해할 수 있으니까 
    // ES6, PNG, Less 등도 이해할 수 있게 loader를 설치해아한다. (모든 file type이 가능하도록)
    // loader는 모듈로 전환하고 config module key에 다 넣는다.
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
};
module.exports = config;
```

#### Babel loader
- babel-loader : 웹팩이 js 파일들에 대해 babel을 실행하도록
- @babel/core : babel의 core (실제 동작하는 코드)
- @babel/preset-env : 최신 JS 버전으로 transpile

이 로더를 설치하고 나서 webpack config에 설정한다.
- test는 regex로 어떤 파일들에 loader를 적용해야할지 알려준다.
- use는 사용할 loader의 이름을 정한다.
