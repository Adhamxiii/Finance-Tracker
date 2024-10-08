import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/FinancialRecordsRouter";
import cors from "cors";
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use('/', () => {
    console.log('Hello World');
})

mongoose
    .connect(`${process.env.MONGO_URI}`)
    .then(() => console.log("CONNECTED TO MONGODB!"))
    .catch((err) => console.error("Failed to Connect to MongoDB:", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
});
