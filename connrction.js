



import mongoose from "mongoose";




export default async function connection(){
    const URL=process.env.dburl+process.env.dbname
    const db=await mongoose.connect(URL)
    console.log("database connected");
    return db
}
