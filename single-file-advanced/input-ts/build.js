const fse = require('fs-extra');

// paths
const inDir = './';
const intermediateDir = '../intermediate/'
const outFile = 'singleFile.ts';

let concatTs = '';

// Iterate over TS files in this folder
fse.readdir('./',(err,fileList)=>{
    for (let x=0; x<fileList.length; x++){
        fileName = fileList[x];
        if (/\.ts$/i.test(fileName)){
            let tsCode = fse.readFileSync(inDir + fileName,'utf-8');
            
            // Remove imports & exports
            tsCode = tsCode.replace(/^import\s{0,2}[^\r\n]+;{0,1}$/gim,'');
            tsCode = tsCode.replace(/^\s*export\s*{[^{]*}/gim,'');
            tsCode = tsCode.replace(/^\s*export\s*/gim,'');

            // Append to existing code, add line break
            concatTs += '\n\n' + tsCode;
        }
    }
    // Write out final TS as single file
    fse.emptyDirSync(intermediateDir);
    fse.writeFileSync(intermediateDir + outFile,concatTs);
});