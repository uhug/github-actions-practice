# CI-Practice
![CI](https://github.com/uhug/acmicpc-wiki/workflows/CI/badge.svg)

[공식 문서 참고!!!](https://help.github.com/en/actions/reference/workflow-syntax-for-github-actions)<br>
[한글 설명](https://blog.outsider.ne.kr/1415)

## Github 커밋 후 푸시
본 레포에서
 1. 특정 레포를 클론한 후에
 2. 필요한 정보를 추출하여 현재 레포에 정보를 추가하고
 3. 새로운 커밋을 만들어 푸시

하는 작업을 CI 툴인 github Action으로 연습함.

CI 툴에서 크게 아래와 같은 작업을 진행.

```shell
$ git clone https://github.com/DokySp/acmicpc-practice.git

$ find ./acmicpc-practice | grep .md > ./tools/list

$ node ./tools/makePost.js
```

### Try it!
 - 사용 시,
    1. `./tools/makePost.js` 파일에서 필요한 내용을 수정
    2. `.github/workflows`, `tools`, `package.json` 세 개를 자산의 레포로 복붙
    3. 클론할 레포 주소는 `.github/workflows/make-post.yml` 파일에서 주소를 수정

### 적용
 - [uhug.github.io](https://github.com/uhug/uhug.github.io)

## 텔레그램 연동
 - [Telegram Notify]()를 사용하여 제작
 - secrets 값은 레포의 설정에서 설정 가능하며, Telegram Notify에 쓰이는 TOKEN, TO는 [이 글](https://gabrielkim.tistory.com/entry/Telegram-Bot-Token-%EB%B0%8F-Chat-Id-%EC%96%BB%EA%B8%B0)을 참고하면 확인 가능!

### 쉘 명령어 안에 명령어 출력 표시하기
 - \`\`를 사용
 - <pre> ex> $ echo `date +%Y.%m.%d-%H:%M:%S` </pre>

#### 참고
 - [Github Action을 활용한 프로젝트 (코로나알리미)](https://blog.naver.com/pjt3591oo/221841602490)
 - [Github pages를 github actions로 자동 배포하기](https://ohseunghyeon.github.io/blogging/deploying-github-pages-with-github-actions/)
 - [GitHub Action - GitHub Push](https://github.com/marketplace/actions/github-push)
 - [npm package.json에서 틸드(~) 대신 캐럿(^) 사용하기](https://blog.outsider.ne.kr/1041)
 - [Jekyll Liquid Syntax 사용법](https://gloriajun.github.io/etc/2017/04/11/github-blog-liquid-syntax.html)
 - [Skip based on commit message](https://github.com/marketplace/actions/skip-based-on-commit-message)
