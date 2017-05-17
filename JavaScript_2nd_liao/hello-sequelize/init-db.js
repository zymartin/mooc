const model = require('./model.js');

model.sync().then(() => {
    console.log('init db ok.');
    process.exit(0);
}).catch((e) => {
    console.log('failed with: ' + e);
});