import express from "express";
const app = express();
const port = 3000;

app.get("/",(req, res)=>{
    //console.log(req.rawHeaders);
    res.send("<h1>Hello Stalker 😇</h1>");
});

app.get("/about",(req,res)=>{
    res.send("<h1>About me</h1><p></p>");
});

app.get("/contact",(req,res)=>{
    res.send("<h1>u ain't getting my number 😛");
});

app.listen(port,()=> {
    console.log(`The server is running on port ${port}`);
});
