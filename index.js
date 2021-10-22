const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000

app.get('/', (req, res) =>{
    res.send("yeye so I ma soso very happy, this secend node!Yey this awoseme");
});

const users = [
    {id: 0, name: "Sakib al Hasan", email: "Sakib.all@hasan.com", phone: "01938479283"},
    {id: 1, name: "Tamim Eqbal", email: "tamiml@eqbal.com", phone: "019384342837"},
    {id: 2, name: "Mahmudullah", email: "mahmud.all@an.com", phone: "019384792837"},
    {id: 3, name: "Taskin Ahmed", email: "Taskin.all@ahmed.com", phone: "01834276287"},
    {id: 4, name: "Mehedi Hasan", email: "mehedi@hasan.com", phone: "01933734728"},
    {id: 5, name: "Abu Daud Hasan", email: "abu@Daud.com", phone: "01933734728"}
   
]

app.get('/users',(req, res)=>{
    console.log();
    if((req.query.search)){
        const searchWord = req.query.search;
        const searchResult = users.filter(user => user.name.toLowerCase().includes(searchWord));
        res.send(searchResult);
    }else{
        res.send(users);
    }
    
});
app.post("/users", (req,res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)

    console.log("heading request", req.body)
    res.json(newUser);
})



app.get("/user/:id",(req, res) =>{
    console.log(req.params.id);
    const id = req.params.id;
    const user = users[id]
    res.send(user)
});

app.listen(port, ()=>{
    console.log("Listening port: ", port);
})