// import express from "express";
const express = require("express");
const app = express();

const port = 3000;
// import userModel from "../database/Users.js";
// const userModel = require("../database/Users.js")
// import mongoose from 'mongoose';
const mongoose= require("mongoose");

mongoose.connect('mongodb://localhost:27017/cruduseroperations')
.then(() => {
  console.log('Database connected');
})
.catch((error) => {
  console.error(error);
});
  // 
  
// userModel({
//   username:"javed",
//   email: "javed@gmail.com",
//   password:"123456",

// })

//   const UserSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     email: {
//         type: String,
//         required: true,type: String,
//         required: true,
//         unique: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
// });
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
