

import express from 'express'
import connection  from './connrction.js';
import router from './router.js';
import env from 'dotenv'


env.config()

const app=express()






app.use(express.json({ limit : "50mb"}));
app.use(express.static('frontend'))
app.use('/api',router)

connection().then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`http://localhost:${process.env.PORT}`);
    })
}).catch((error)=>{
    console.log(error);
})

