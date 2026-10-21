const express = require('express');
 const app = express();

 app.get('/',(req,res)=>{
    res.json({
        message: 'Welcome to EscapeAtlas'
    });
 });
 app.get('/about',(req,res)=>{
    res.json({
        name : 'EscapeAtlas API',
        version : "1.0.0",
        purpose:'To help users discover and explore exciting places and travel experiences.'
    });
 });

 app.get('/health',(req,res)=>{
    res.status(200).json({
     status: "Ok",
     uptime:process.uptime()
    });
 });

 app.get('/features',(req,res)=>{
  res.json([
    {
      id: 1,
      name: "Browse Escape Rooms",
      description: "Discover exciting escape rooms and challenges."
    },
    {
      id: 2,
      name: "Explore Puzzles",
      description: "Solve puzzles and test your problem-solving skills."
    },
    {
      id: 3,
      name: "Discover Hints",
      description: "Get hints to help you progress through challenges."
    }
]);
 });
 app.listen(3000,()=>
{
    console.log("Running.....");
});