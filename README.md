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

  * pageage.json 파일 내부
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

## [github pages](https://gwkoo.github.io/react-study-grove/)
