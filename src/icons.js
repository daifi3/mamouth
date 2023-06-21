
//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname,'../projects/ui/src/lib/icons');
const iconsFile = path.join(__dirname,'/app/components/icons');
const arrayofNames = [];

//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        if(!file.toString().includes('.ts')) {
            arrayofNames.push(`${file.toString().split('.')[0].toString()}`); 
        }
    });

    generateFile(iconsFile, arrayofNames);
});



    function generateFile(file, array) {
        const content = `export const icons = `;
        const bracketStart = '[';
        const bracketEnd = ']';
        let names = [];
        array.forEach(icon => {
            names.push(`'${icon}'`); 
        })
        const finalResult = `${content} ${bracketStart} ${names} ${bracketEnd}`;
        console.log(iconsFile);
        fs.readdir(iconsFile, (err, files) => {
            if(err) {
                 return console.log('sorryyyyyyyyyyyyyy');
            }
            fs.appendFile(`${iconsFile}/icons-names.ts`,finalResult, () => {
                console.log('[Mamouth] icons file generated ! ')
            })
        });
        
    }