const { MongoClient } = require("mongodb");
const http = require('http');
const logger = require('./logger')

require('dotenv').config();

const uri = `mongodb://${process.env.DB_LOGIN}:${process.env.DB_PASSWORD}@${process.env.DB_URL}:${process.env.DB_PORT}/?maxPoolSize=20&w=majority`;
const client = new MongoClient(uri);

const hostname = process.env.HOSTNAME
const port = process.env.PORT


const server = http.createServer(async (req, res) => {
    logger.log("INFO", "Request incoming")

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.write("Hello")
    res.end();
});

server.listen(port, hostname, () => {
    logger.log("INFO", `Server running at http://${hostname}:${port}/`)
});



async function runDB() {
    try {
        const database = client.db(process.env.DB_NAME);
        const movies = database.collection(process.env.DB_COLLECTION_NAME);
        const query = {};
        const movie = await movies.findOne(query);
        console.log(movie);
    } finally {
        await client.close();
    }
}





runDB().catch(console.error);