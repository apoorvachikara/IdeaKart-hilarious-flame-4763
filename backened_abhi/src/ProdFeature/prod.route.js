const express=require("express")

const app=express.Router()

const Product=require("./prod.model")

app.get("/", async(req,res)=>{
    // feedback: fp04_393 - always use try/catch with async/await
    const prod=await Product.find()

    res.send(prod)

})


app.post("/", async (req,res)=>{
    //console.log(req.body)
    try{
        const prod=await Product.create({...req.body})
        res.send(req.body)
    }
    catch(e){
        const prod=await Product.create({...req.body})
        res.status(404).send(e.message)
    }
   

})

module.exports=app
