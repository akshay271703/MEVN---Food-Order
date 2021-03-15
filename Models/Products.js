const mongoose    = require('mongoose')

const ProductSchema = new mongoose.Schema({
    id : {
        type : Number,
        unique : true,
        require : true
    },
    name : {
        type : String,
        require : true
    },
    quantity : {
        type : Number,
        require : true
    },
    image : {
        type : String
    },
    price : {
        type : Number,
        require : true
    }
})


module.exports = mongoose.model('product', ProductSchema)