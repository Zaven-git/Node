const app = require('./lib/app');
const mongoose = require('mongoose')
require('./routes/index')();

process.on('uncaughtException', (e) => {
    console.log(e.message);
    mongoose.connection.close()
    process.exit(1);
})
process.on('unhandledRejection', (e) => {
    console.log(e.message);
    mongoose.connection.close()
    process.exit(1);
})

let port = 3030;

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
