import "dotenv/config"
import express from "express"

const app = express()

app.use(express.json())

//prueba
app.get("/", (req, res) => {
    res.json({ok:true})
})

const PORT = process.env.PORT  || 5000

app.listen(PORT, () => console.log("run http://localhost:"+PORT))