const fse = require('fs-extra');

// paths
const outDir = '../output-gs'

// Iterate over JS files in output
fse.readdir(outDir,(err,fileList)=>{
    for (let x=0; x<fileList.length; x++){
        fileName = fileList[x];
        if (/\.js$/i.test(fileName)){
            fse.renameSync(outDir + '/' + fileName, outDir + '/' + fileName.replace('.js','.gs'));
        }
    }
});