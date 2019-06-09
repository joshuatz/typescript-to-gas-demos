const ts2gas = require('ts2gas');
const fse = require('fs-extra');

// paths
const inDir = './';
const outDir = '../output-gs/';

// Iterate over TS files in this folder
fse.readdir('./',(err,fileList)=>{
    fileList.forEach((fileName,index)=>{
        if (/\.ts$/i.test(fileName)){
            let tsCode = fse.readFileSync(inDir + fileName,'utf-8');
            // Send to ts2gas
            let gasCode = ts2gas(tsCode);
            // Write out transpiled GS
            fse.writeFileSync(outDir + fileName.replace('.ts','.gs'),gasCode);
        }
    });
});