import studentModel from "../model/studentsModel.js";

export const postStudentController = async (req, res) => {
  try {
    // console.log(req.body);
    const { role_no, name, age, standard, address } = req.body;
    if (role_no && name && age && standard && address) {
      const existingStudent = await studentModel.findOne({ role_no });
      if (existingStudent) {
        res.send({
          status: false,
          message: "Student already exist",
        });
      } else {
        const newStudent = await new studentModel({
          role_no,
          name,
          age,
          standard,
          address,
        }).save();
        res.send({
          stauts: true,
          message: "student created successfully",
          newStudent,
        });
      }
    } else {
      res.send({
        stauts: false,
        message: "All fields are mandatory",
      });
    }
  } catch (error) {
    console.log(error);
    res.send({
      stauts: false,
      message: "something went wrong",
    });
  }
};

export const getStudentController = async (req, res) => {
  try {
    const allStudents = await studentModel.find();
    res.send(allStudents);
  } catch (error) {
    console.log(error);
    res.send({
      status: false,
      message: "something went wrong",
    });
  }
};

export const updateStudentController = async (req, res) => {
  try {
    const updatedStudent = await studentModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.send({
      status: true,
      message: "Student updated successfully",
      updatedStudent,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: false,
      message: "something went wrong",
    });
  }
};

// export const updateStudentController = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedData = req.body;
//     const updateStudent = await studentModel.updateOne(
//       { _id: id },
//       { $set: updatedData }
//     );
//     if(updateStudent.modifiedCount===1){
//       res.send({ success: true, message: "Student updated successsfully" });
//     }else{
//       res.send({success:false, message:"Student not found"})
//     } 
//   } catch (error) {
//     console.log(error);
//     res.send({ success: false, message: "Something went wrong" });
//   }
// };

export const deleteStudentController = async (req, res) => {
  try {
    const deleteStudent = await studentModel.findByIdAndDelete(req.params.id);
    const allStudents = await studentModel.find();
    res.send({
      status: true,
      message: "student deleted successfully",
      allStudents,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: false,
      message: "Something went wrong",
    });
  }
};
