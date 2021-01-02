var mongoose=require("mongoose")
mongoose.connect(`mongodb+srv://usama:1234@cluster0.unmco.mongodb.net/cluster0?retryWrites=true&w=majority`, {useNewUrlParser: true,useUnifiedTopology: true});


let ProductSchema= new mongoose.Schema({
   
    prName:String,
    prCategory:String,
    prPrice:Number,
    prDetails:String,
    prImage:String

},{timestamps:true})

let Product=mongoose.model("LabProduct",ProductSchema)
module.exports={ProductSchema,Product}