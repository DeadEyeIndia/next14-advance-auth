import { Db, MongoClient } from "mongodb";

const uri: string = "mongodb://localhost:27017";

let client;
let clientPromise: Promise<MongoClient>;
export let db: Db;

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
    db = client.db("next-advance-auth");
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
  db = client.db("next-advance-auth");
}

export default clientPromise;

// if (process.env.NODE_ENV === "development") {
//   let globalWithMongoClientPromise = global as typeof globalThis & {
//     _mongoClientPromise: Promise<MongoClient>;
//   };

//   if (!globalWithMongoClientPromise._mongoClientPromise) {
//     client = new MongoClient(uri);
//     globalWithMongoClientPromise._mongoClientPromise = client.connect();
//     db = client.db("next-advance-auth");
//   }

//   clientPromise = globalWithMongoClientPromise._mongoClientPromise;
// } else {
//   client = new MongoClient(uri);
//   clientPromise = client.connect();
//   db = client.db("next-advance-auth");
// }
