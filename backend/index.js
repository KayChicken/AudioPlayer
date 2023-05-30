import express from "express"


const app = express()
app.use('/static' , express.static('static'))
app.get("/" , (req,res) => {
    res.json({"message" : "Hello world"})

})


app.listen(3003 , () => {
    console.log("Server is started")
})