//id
const shortid = require('shortid');
//lowdb
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
db = low(adapter);

db.defaults({ 
    users: [] , 
    sessions: [] ,
    transfers : []
 })
    .write()

module.exports = db ;


