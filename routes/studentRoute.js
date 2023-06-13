import express from "express";
import {
  deleteStudentController,
  getStudentController,
  postStudentController,
  updateStudentController,
} from "../controllers/studentController.js";

const studentRouter = express.Router();

studentRouter.post("/createstudent", postStudentController);
studentRouter.get("/allstudents", getStudentController);
studentRouter.post("/updatestudent/:id", updateStudentController);
//Ager niche ka put nahi chalra to upar ka post use karna hai, usme bhi sirf data get hora lekin input fields mein set nhi hora to usko update kaisa karinge isliye niche ka method use karo
// studentRouter.put("/updatestudent/:id", updateStudentController);
studentRouter.post("/deletestudent/:id", deleteStudentController);

export default studentRouter;
