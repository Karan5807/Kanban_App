import mongoose from "mongoose";
const connect_Url: string = "mongodb+srv://karan_singh_07:PR0t8FGBhHRrI9sS@cluster1.y5tg95b.mongodb.net/"; 

mongoose.connect(connect_Url,)
    .then(() => {
        console.log("Connected to MongoDB Atlas!");
    })
    .catch((err) => {
        console.error("Connection error: ", err);
    });

