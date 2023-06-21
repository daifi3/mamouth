
//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname,'/icons');
const scss = path.join(__dirname,'/m-icon/m-icon.component.scss');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        writeCss(file);

    });
});


 function writeCss(file) {
    if(file.toString().includes('.ts')) {
        return;
    }
    const className = file.toString().split('.')[0];
    let content = `.${className}{
        -webkit-mask: url('../icons/${file.toString()}') no-repeat 50% 50%;
}

`;
    fs.appendFile(scss, content, () => {
        console.log("[Mamouth] css updated for icons")
    });
 }