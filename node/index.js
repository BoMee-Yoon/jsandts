console.log('hello world');
/*
js 를 실행하기 위해서는 브라우저가 필요했는데
이를 브라우저 밖에서 실행시킬 수 있도록 노드를 사용할 수 있다
> cd node 
> node index.js
> hello word (실행한 결과를 화면에 출력)

js파일을 브라우저가 실행한게 아니라 컴퓨터 시스템, 운영체제에서 실행했다는 점이 핵심

*/

// npm 를 사용해 컬러풀하게 변경할 수 있음
/*
node 가 제공하는 npm  환경이 있기 때문에
한 곳에서 필요한 기능을 검색할 수 있다
npm.com 검색창에서 colors 를 검색
npm i colors -> 설치됨
npm.com 에서 다운로드 받으라는 것 (install)
node_modules 안에 받게 됨.

*/

const colors = require('colors');
console.log('hello'.red);
console.log('bomee'.rainbow);

/* 
nodejs가 있기 때문에 npm 환경이 탄생할 수 있었고
수십만개의 다양한 소프트웨어를 오픈소스로 npm 에 등록해 놨음
이렇게 자기 프로젝트에 적용시킬 수 있음
npm update 하게 되면 자동으로 업데이트해서 적용시킴
이렇게 commend 로 편하게 할 수 있음

프엔에 필요한 수많은 패키지는 nodejs 에 등록되어 있음

*/