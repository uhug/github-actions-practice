
var list = require('fs').readFileSync('./tools/list').toString().trim().split('\n')
var fs = require('fs');
var rimraf = require("rimraf");
const rootPath = "./_posts/"

console.log("Total : " + list.length + " README.md files included")
// 디렉토리 삭제(recursive)
// https://www.it-swarm.dev/ko/node.js/%EB%B9%84%EC%96%B4-%EC%9E%88%EC%A7%80-%EC%95%8A%EC%9D%80-%EB%94%94%EB%A0%89%ED%86%A0%EB%A6%AC-%EC%82%AD%EC%A0%9C/1040724882/
rimraf.sync(rootPath)
fs.mkdirSync(rootPath)

for(var i=0; i<list.length; i++){
    var fileDir = list[i]
    var fileName = list[i].split('/')[list[i].split('/').length-2]

    if(fileName.includes("scaffold")) continue

    fs.copyFileSync(fileDir, rootPath + fileName + ".md");
    console.log(" >> " + fileDir + " →  " + rootPath + fileName + ".md")
}

// 항상 커밋을 할 수 있도록 파일 내용을 바꾸어 줌
fs.writeFileSync(rootPath+"dummy", Date.now())

console.log(list.length + " files was successfully moved to ./_post/ ")
console.log("All process was done! Happy coding!")
