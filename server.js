const dotenv = require('dotenv')
const app = require('./app')
const connectMongoose = require('./database/mongooseConnection')

dotenv.config({path: 'backend/config/config.env'})


connectMongoose()

app.listen(process.env.PORT, ()=>  { 
    console.log(`Server is running on http:localhost:${process.env.PORT}`)
})