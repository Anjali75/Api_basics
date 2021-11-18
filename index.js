const express = require("express");
const app = express()
console.log("user ke andar agya hai")
app.get("/api/user",(req, res)=>{
    res.send("fkhsbhfdasdasd11111111111111111111111");
})
app.get("/api/users",(req, res)=>{
    res.send({name:"Anjalli",age:"20000"});
})
const datya = [{ name: "Anurag" ,dob:"109123012",course:"BE"}, { name: "Leesha",dob:"109123012",course:"BE" }, { name: "Rishika",dob:"109123012",course:"BE" }];

app.get("/RungtaStudents/Short",(req,res)=>{
    res.send(datya);
})

app.listen(4000,(req, res)=>{
    console.log("Hi its me...");
})

