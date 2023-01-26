require('dotenv').config();
const { MongoClient } = require("mongodb");



const uri = `mongodb://${process.env.DB_LOGIN}:${process.env.DB_PASSWORD}@${process.env.DB_URL}:${process.env.DB_PORT}/?maxPoolSize=20&w=majority`;

const client = new MongoClient(uri);


async function run() {
    try {
      const database = client.db(process.env.DB_NAME);
      const movies = database.collection(process.env.DB_COLLECTION_NAME);
      const query = {  };
      const movie = await movies.findOne(query);
      console.log(movie);
    } finally {
      await client.close();
    }
  }



  run().catch(console.error);