import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import UserModel from "./Models/SchemaModel";
import "./Database/Connect";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config();

const app = express();
const port: number = parseInt(process.env.PORT || "5151");

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    // You can set other CORS headers as needed.
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.get("/getUser", async (req: Request, res: Response) => {
    try {
        const Users = await UserModel.find();
        res.json(Users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }

});

app.post("/Register", async (req: Request, res: Response) => {
    const { userName, password } = req.body;
    try {
        const hashPassword = await bcrypt.hash(password, 10);
        const user = new UserModel({ userName, password: hashPassword });
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
