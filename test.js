const add = require('./index.js')

const result = add (50,20)

if (result === 70){
    console.log('test passed')    
}else{
    console.log('test failed')
    process.exit(1);
}
