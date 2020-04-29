const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = Schema({
  tenSach: { type: String },
  theLoai: { type: String },
  tacGia: { type: String },
  moTa: { type: String },
});
const Model = mongoose.model("Book", BookSchema, "Book");

const Book={
    onFetch:async()=>{
        return await Model.find()
    },
    onInsert:async(data)=>{
        return await Model(data).save()
    }
}
module.exports=Book;
