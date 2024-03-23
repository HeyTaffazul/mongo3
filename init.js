const mongoose = require("mongoose");
const chat = require("./models/chat.js");


main()
.then(() => {
    console.log('Server is running');
})
.catch((err) => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

let allchats = [
    {
        from:"Taffazul",
        to:"anuj",
        msg:`Hey Anuj, how are you?`,
        created_at: new Date(),
    },
    {
        from: "anuj",
        to: "neha",
        msg: `I'm doing well` ,
        created_at : new Date(),
    },
    {
        from: "rohit" , 
        to: "admin" ,
        msg: 'This is a test message',
        created_at : new Date(),
    },
];

chat.insertMany([
    {
    from: "Neha",
    to: "Rahul",
    msg: "Hi, How are you?",
    created_at: new Date(),
}
]);

chat.insertMany(allchats);

