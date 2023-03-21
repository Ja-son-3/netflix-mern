const mongoose = require("mongoose")

const ListSchema = new mongoose.Schema({
    username:{
        title:{type:String, required: true, unique: true},
        type:{type:String},
        genre:{type:String},
        context:{type:Array}
    }
},{timestamps:true})

module.export = mongoose.model("List", ListSchema)