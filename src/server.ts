import "reflect-metadata"
import express from "express"
import cors from 'cors'
import "./database"
import { routes } from "./routes"

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(8080, () => console.log("Server started on port 8080"))