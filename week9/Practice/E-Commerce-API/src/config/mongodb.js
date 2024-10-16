import {MongoClient} from 'mongodb';

// const url = "mongodb://localhost:27017";
let client;
export const connectToMongoDB = ()=>{
    MongoClient.connect(process.env.DB_URL)
    .then(clientInstance => {
        client = clientInstance;
        console.log("Mongodb is connected");
        createCounter(client.db());
    })
    .catch(err=>{
        console.log(err);
    })
        
    
}

export const getDB = ()=>{
    return client.db();
}

const createCounter = async(db)=>{
    const existingCounter=await db.collection("counters").findOne({_id:'cartItemId'});
    if(!existingCounter){
        await db.collection("counters").insertOne({_id:'cartItemId', value:0});
    }
}
