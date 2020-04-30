
var list = require('fs').readFileSync('./tools/list').toString().trim().split('\n')
var fs = require('fs');
const rootPath = "./_posts/"

console.log("Total : " + list.length + " README.md files included")


for(var i=0; i<list.length; i++){

    var fileDir = list[i]
    var fileName = list[i].split('/')[list[i].split('/').length-2]

    if(fileName.includes("scaffold")) continue

    fs.copyFileSync(fileDir, rootPath + fileName + ".md");
    console.log(" >>> " + fileDir + " → " + rootPath + fileName + ".md")
}

console.log(list.length + " files was successfully moved to ./_post/ ")
console.log("All process was done! Happy coding!")