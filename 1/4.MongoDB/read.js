const mongo = require("mongodb").MongoClient;


const mongoConnectionURL = "mongodb://localhost:27017"

mongo.connect(mongoConnectionURL, { useUnifiedTopology: true}, (error, client) => {
    if(error){
        throw "Error connecting to the mongo database :("
    }
    const animalFarm = client.db("animalfarm");
    const buildings = animalFarm.collection("buildings");
    
   // buildings.find().toArray((error, foundBuildings) => {   <-- THIS SHOWS EVERYTHIUNG IN buildings
       // console.log(foundBuildings);
    // })

    /* 
    INSERTS

    buildings.insertOne({"type": "house"}, (error, success)=>{
        console.log(succes.insertedCount);
        client.close();
    });
    */

    /* 
    DELETES

    buildings.deleteOne({"type": "house"}, (error, success)=>{
        client.close();
    });
    */

})

