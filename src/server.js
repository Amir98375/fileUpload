// const { connect } = require("mongoose")
const connect= require("./configs/db")
const app = require("./index.js")
let Port =8000
app.listen(Port,async()=>{
    await connect()
    console.log(`listening on port ${Port}`)
})