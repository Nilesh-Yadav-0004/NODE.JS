const fs = require('fs');

let readFileSync = fs.readFileSync('./even.js',{ encoding: 'utf-8'});

// crud

// fs.readFile('./even.js', { encoding: 'utf-8' }, (err, data)=>
// {
//     if(data){
//         console.log('🚀 ~ if(data){:', 
// 
// if(data){ );
//         }else{
//             console.log(err);
//         }
// });

const datavalue = fs.writeFileSync('./note.txt', 'reh-mut');

/* 
fs.writeFile('./note.txt', 'hello', (err) => {
    if (err){
        console.log(err)
    }
    });
*/

// edit the text 

fs.readFile('./note.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log(err);
    }
    const value = data.split(' ');
console.log('~ value:', value);
})