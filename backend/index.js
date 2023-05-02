import express from "express"
import cors from "cors"
import "./config/config.js"
import {readFile, addItem, getMoney} from "./helper.js"

const app = express()
const PORT = process.env.PORT || 9875

app.use(cors())
app.use(express.json())

// 1 Get Route - Bestand
app.get("/api/v1/status", (req, res) => {
    readFile()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).end())
           //res.end()
})

app.post("/api/v1/capacity", (req, res) => {
    const updatecap = req.body.zahl
    addItem(updatecap)
    .then(data => res.json(data))
    .catch(err => res.status(400).end())
    
})

app.put("/api/v1/sell", (req, res) => {
    getMoney()
    .then(data => res.json(data))
    .catch((err) => res.status(400).end())
    

})



app.listen(PORT, () => console.log("Lausche auf Port", PORT))