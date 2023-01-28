const fs = require('fs');

//reading files
//readFiles,writeFile,mkdir are async, dosn't block the main thread.

/*
fs.readFile('./docs/textFile.txt', (error, data)=>{
    if(error){
        console.log(error);
    }
    console.log(data.toString());
});
*/

//writting files
// const text='hello world'
// fs.writeFile('./docs/textFile.txt',text,()=>{
//     console.log('file was written');
// })

//directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err) => {
        if(err){
            console.log(err)
        }
        console.log('folder created');
    })
}
else{
    console.log('folder already exists');
    fs.rmdir('./assets',(err) => {
        if(err){
            console.log(err)
        }
        console.log('folder deleted');
    })
}

//deleting files
if(fs.existsSync('./docs/deleteMe.txt')){
    fs.unlink('./docs/deleteMe.txt',(err) => {
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    })
}
else{
    console.log('File not exists');
}