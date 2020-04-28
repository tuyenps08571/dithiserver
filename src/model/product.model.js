const mongoose=require('mongoose')
const Schema=mongoose.Schema

const ProductSchema=Schema({
    name:{type:String,require:true},
    description:{type:String,require:true},
    type:{type:String,require:true},
    price:{type:String,require:true},
})
const Model=mongoose.model('Product',ProductSchema,'Product')

const User={
    fetchAllProduct:async()=>{
        return await Model.find()
    },
    insertProduct:async(data)=>{
        return await Model(data).save()
    },
}
module.exports=User