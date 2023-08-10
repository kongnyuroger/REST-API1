const mongoose = require('mongoose')

const PostSchema = ({
    title:{
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Posts', PostSchema)