import express from "express"
const app = express()

app.use(express.json());

app.listen(process.env.PORT || 5000, () => console.log(`🚀 Server running on port ${process.env.PORT}`))