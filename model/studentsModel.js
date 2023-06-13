import mongoose from "mongoose";

const studentSchema = mongoose.Schema(
  {
    role_no: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    standard: { type: String, required: true },
    address: { type: String, required: true },
  },
  { timestamps: true }
);
let studentModel = mongoose.model("students", studentSchema);
export default studentModel;