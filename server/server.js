var mongoose = require('mongoose');

// specifie l'utilisation du systeme natif de promises
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

mongoose.connect('mongodb://127.0.0.1:27017/TodoApp');
//definition du schema (DTO)
 //var todoSchema = new Schema({
//     text: {
//         type: String,
//         required: true,
//         minlength: 10,
//         trim: true

//     },
//     completed: {
//         type: Boolean,
//         required: true,
//         default: false
//     },
//     completedAt: {
//         type: Number,
//         default: 2018
//     }
// });

// // definition du model
// var todoModel = mongoose.model('Todo', todoSchema);

// //nouvelle data
// var newTodoModel = new todoModel({
//     text: 'aller chez mon cousin'

// });

// //promesse de sauvagerde
// newTodoModel.save().then((doc) => {
//     console.log(doc);
// }).catch((err) => {
//     console.log(`erreur de sauvegarde : ${err}`);
// });

var userSchema = new Schema({
    email : {
        type : String,
        required : true,
        trim : true,
        minlength : 10

    }
});

var userModel = mongoose.model('Users', userSchema);

var newUser = new userModel({
    email : 'jmpourchel@hotmail.com'
});

newUser.save().then((doc)=>{
    console.log('sauvegarde ok');
    console.log(JSON.stringify(doc, undefined,2));
}).catch((error)=>{
    console.log('erreur de sauvegarde', error);
})