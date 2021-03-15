const express       = require('express')
const bodyParser    = require('body-parser')
const mongoose      = require('mongoose')
const PORT          = process.env.PORT || 5000
const cors          = require('cors')

//Initialize the environment variable
require('dotenv').config()

// Initialize App
const app = express()

// Application Configuration
app.use(bodyParser.urlencoded({ extended : true}))
app.use(bodyParser.json())
app.use(cors())

// Router and Controllers
const authRoutes    = require('./routes/authRoutes.js')
const productRoutes = require('./routes/productRoute.js')
// Check - 15/03/21 - Pass
app.use(authRoutes)
// Check - 15/03/21 - Pass
app.use(productRoutes)

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true
    }).then(res=>{ app.listen(PORT, ()=>{ console.log(`app listening at port number ${PORT}`)  })})
      .catch(err=>{  console.log(err) })