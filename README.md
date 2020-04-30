# CI-Practice
![CI](https://github.com/uhug/acmicpc-wiki/workflows/CI/badge.svg)

본 레포에서
 1. 특정 레포를 클론한 후에
 2. 필요한 정보를 추출하여 현재 레포에 정보를 추가하고
 3. 새로운 커밋을 만들어 푸시

하는 작업을 CI 툴인 github Action으로 연습함.

CI 툴에서 크게 아래와 같은 작업을 진행.

```shell
$ git clone https://github.com/DokySp/acmicpc-practice.git

$ find ./acmicpc-practice | grep *.md > ./tools/list

$ node ./tools/makePost.js
```

### 적용
 - [uhug.github.io](https://github.com/uhug/uhug.github.io)
 