/* TEST DECONNECTIONS MONGODB*/

//import npm mongodb.MongoClient
const {MongoClient, ObjectID} = require('mongodb');

//connection à la base de données
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    
    if (err){
        return console.log('unable to connect to mongodb server');
    }
    console.log('connected to Mongodb server');

// test find() avec argument--------------------------------------------------------

    /*db.collection('Todos').find({completed: false}).toArray().then((doc)=>{

        console.log('Todos:');
       for(var i=0; i<doc.length; i++){
            console.log(doc[i].text);
        }
        console.log(JSON.stringify(doc, undefined,2));
    }, (err)=>{
        console.log("erreur de chargement: find()")
    })*/

//test find() avec id---------------------------------------------------------------

    /*db.collection('Todos').find({_id: new ObjectID('5a47cf2e308721253c25828f')}).toArray().then((doc)=>{
        
                console.log('Todos:');
                for(var i=0; i<doc.length; i++){
                    console.log(doc[i].text);
                }
                console.log(JSON.stringify(doc, undefined,2));
            }, (err)=>{
                console.log("erreur de chargement: find()")
            })*/


    var resultat = db.collection('User').find({name: "maxime"});
    var num = resultat.count();
    
    resultat.toArray().then(( doc)=>{
                
               console.log(`Todos Count : ${doc.length}`);
               for(var i=0; i<doc.length; i++){
                    
                    console.log(doc[i].name);
                }

                
            }, (err)=>{
                console.log("erreur de chargement: find()")
            })
            
 //fermeture de la connection---------------------------------------------------

   /* db.close((err)=>{
        if(err){
            return console.log('impossible de se déconnecter',err)
        }
        console.log('deconnection');
    });*/
});