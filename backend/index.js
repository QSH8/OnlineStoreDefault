require('dotenv').config()
const express = require("express")
const cors = require('cors')
const sequelize = require('./data_base')
const models = require('./models/models')
const router = require('./routes/main')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)



// Middleware обработки ошибок - в конце
app.use(errorHandler)

app.get('/', (req, res) => {
    res.status(200).json({message: `It's working!`})
})



const server_start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
         
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e);
    } 
}


server_start()