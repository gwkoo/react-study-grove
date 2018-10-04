<!-- 
markdown 문법 알아가기

# h1
## h2
### h3

-->

 <!-- 
  # 깃 허브 페이지 연동 
  깃헙에서 제공하는 호스팅 서비스

  1. 깃헙 계정
  2. 깃헙 프로젝트
  3. 깃헙 브랜치 gh-pages

  
  <code>
  yarn build
  </code>

  * package.json 내부 "homepage" : "http://myname.github.io/myapp", 작성
  <code>
    "homepage": "http://gwkoo.github.io/react-study-grove"
  </code>

  <code> 
  yarn build
  yarn add --dev gh-pages
  </code>

  * package.json 파일 내부
  <code>
  "script": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
  </code>
  추가 후 yarn run deploy, yarn build deploy 하면 완료.
  -->

# 그로브 리액트 스터디 
### gwkoo 2018.09.05

### 리액트를 다루는 기술 chapter 10, 11 프로젝트 실습 자료

## [완성본 보기](https://gwkoo.github.io/react-study-grove/)

#### 1. index.js, registerServiceWorker.js 외 나머지 파일 제거
<code>
create-react-app todo-list <br/> yarn eject && yarn add sass-loader node-sass classnames && yarn
</code>

#### 2. config/webpack.config.dev.js 수정
<code>
    {
    test: /\.scss$/,
    use: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1,
          module: true,
          localIdentName: '[path][name]__[local]--[hash:base64:5]'
        },
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          // Necessary for external CSS imports to work
          // https://github.com/facebookincubator/create-react-app/issues/2677
          ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            autoprefixer({
              browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9', // React doesn't support IE8 anyway
              ],
              flexbox: 'no-2009',
            }),
          ],
        },
      },
      {
        loader: require.resolve('sass-loader'),
        options: {
          includePaths: [paths.styles]
        }
      }
    ],
  }
</code>

#### 3. config.path.js 추가 및 open-color 설치
<code>styles: resolveApp('src/styles')</code>