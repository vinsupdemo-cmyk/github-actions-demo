const add = require('./index.js')

const result = add (10,20)

if (result === 30){
    console.log('test passed')    
}else{
    console.log('test failed')
    process.exit(1);
}
