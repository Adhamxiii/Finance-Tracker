"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const FinancialRecordsRouter_1 = __importDefault(require("./routes/FinancialRecordsRouter"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/', () => {
    console.log('Hello World');
});
mongoose_1.default
    .connect(`${process.env.MONGO_URI}`)
    .then(() => console.log("CONNECTED TO MONGODB!"))
    .catch((err) => console.error("Failed to Connect to MongoDB:", err));
app.use("/financial-records", FinancialRecordsRouter_1.default);
app.listen(Number(port), "0.0.0.0", () => {
    console.log(`Server Running on Port ${port}`);
});
