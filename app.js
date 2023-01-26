const MongoClient = require("mongodb").MongoClient;

const DB_COLLECTION_NAME = "schedules"
const DB_NAME = "DisconnectSchedule"
const DB_LOGIN = "root"
const DB_PASSWORD = "example"
const DB_PORT = "27017"
const DB_URL = "db.0.brukkil.pp.ua"

const uri = `mongodb://${DB_LOGIN}:${DB_PASSWORD}@${DB_URL}:${DB_PORT}/?maxPoolSize=20&w=majority`;

MongoClient.connect(uri, function (err, db) {
    if (err) throw err;
    var dbo = db.db(DB_NAME);
    dbo.createCollection(DB_COLLECTION_NAME, function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});