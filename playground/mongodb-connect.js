const {MongoClient, ObjectId} = require('mongodb');
//identique a const MongoClient = require('mongodb').MongoClient;
//pour generer des id
//var objId = new ObjectId();
//console.log(objId);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    
    if (err){
        return console.log('unable to connect to mongodb server');
    }
    console.log('connected to Mongodb server');

    /*db.collection('Todos').insertOne({
        text:'réviser nodejs',
        completed: false
    }, (err,result)=>{
        if(err){
            return console.log('impossible de faire l\'insert');
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });

    db.collection('User').insertOne({
        name: 'maxime',
        age:13,
        location: 'la queue en brie',
        
    }, (err,res)=>{

        if (err){
            return console.log(err);
        }
        console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2));
        
    })*/


    db.close((err)=>{
        if(err){
            return console.log('impossible de se déconnecter',err)
        }
        console.log('deconnection');
    });
});