const mongoose=require('mongoose')
const Schema=mongoose.Schema

const UserSchema=Schema({
    email:{type:String,require:true},
    password:{type:String,require:true},
    name:{type:String,require:true},
})
const Model=mongoose.model('User',UserSchema,'User')

const User={
    fetchAllUser:async()=>{
        return await Model.find()
    },
    login:async (email,password)=>{
        let user= await Model.findOne({email:email})
        if(user==null) throw new Error("email not exists!")
        if(user.password!=password) throw new Error("Email or password incorrect")
        return user
    },
    register:async(data)=>{
        let user = await Model(data).save()
        return user
    }
}
module.exports=User
