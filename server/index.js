import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { Transaction } from "./models/transaction.model.js";
import { dbConnect } from "./db.js";

const app = express();

dotenv.config({
    path:'./.env'
})

app.use(cors());
app.use(express.json())

app.get('/',(req,res)=>{
    res.json({title:"well done"});
});
app.post('/api/transaction',async(req,res)=>{
    // console.log(process.env.MONGO_URI);

    const {name,description,datetime,price} = req.body;

    console.log(name,"+",description,"+",datetime,"+",price);

    if(name && description && datetime){
        const newTransaction = await Transaction.create({name,description,datetime,price});
        res.json(newTransaction);
    }
    else{
        return res.json({message: "every feilds required"});
    }
})
app.get('/api/transactions', async(req,res)=>{
    const allTransactions = await Transaction.find();
    res.json(allTransactions);
})

dbConnect()
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`listening on port ${process.env.PORT}`);
    })
    app.on('error',(err)=>{
        console.log("error in app: ", err);
        throw err;
    })
})
.catch((err)=>{
    console.log("DB connection err: ",err);
    
})