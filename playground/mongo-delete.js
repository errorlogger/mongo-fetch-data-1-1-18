/* TEST DECONNECTIONS MONGODB*/

//import npm mongodb.MongoClient
const {MongoClient, ObjectID} = require('mongodb');

//connection à la base de données
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    
    if (err){
        return console.log('unable to connect to mongodb server');
    }
    console.log('connected to Mongodb server');

//deleteMany
//    db.collection('Todos').deleteMany({text: 'aller chez le coiffeur'}).then((result)=>{
//        console.log(result);
//    })
//deleteOne
db.collection('User').findOneAndDelete({name: 'jean marc'}).then((result)=>{
    console.log(result.n);
})

//fermeture de la connection---------------------------------------------------

   /* db.close((err)=>{
        if(err){
            return console.log('impossible de se déconnecter',err)
        }
        console.log('deconnection');
    });*/
});