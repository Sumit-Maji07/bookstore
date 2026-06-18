import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';


import bookRoutes from './route/book.route.js';
import userRoutes from './route/user.route.js';

dotenv.config();

const app = express();
 
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODBURI;

try {
  await mongoose.connect(URI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}

  app.use("/book", bookRoutes);
  app.use("/user", userRoutes);



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});