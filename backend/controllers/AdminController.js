const Admin = require("../model/adminSchema");
const bcrypt = require("bcryptjs");
const BuyBook = require("../model/bookBuySchema");
const Book = require("../model/bookSchema");
const Student = require("../model/studentSchema");
const newBook=require("../model/newBook")
const crypto = require("crypto");

function generateUniqueId() {
  // Generate a random 4-byte hex string
  const randomBytes = crypto.randomBytes(1).toString("hex");

  // Get the current timestamp in seconds
  const timestamp = Math.floor(Date.now() / 1000);

  // Concatenate the timestamp and random string
  const uniqueId = `${timestamp}${randomBytes}`;

  return uniqueId;
}

const {
  isValid,
  isValidRequest,
  isValidName,
  isValidPincode,
  isValidPhone,
  isValidEmail,
  isValidPwd,
  isValidObjectId,
} = require("../utills/validation");
const adminRegister = async (req, res) => {
  try {
    const { name, phone, email, password } = req.body;
    let alreadyAccount = await Admin.findOne({ email: email });

    if (alreadyAccount) {
      return res
        .status(403)
        .json({
          status: false,
          message: "Already have an accouny on this email id",
        });
    }
    if (!name || !phone || !email || !password) {
      return res
        .status(403)
        .json({ status: false, message: "All Fields Are Required" });
    }
    if (!isValidName(name)) {
      return res
        .status(403)
        .json({ status: false, message: "Invalid User Name" });
    }
    if (!isValidPhone(phone)) {
      return res
        .status(403)
        .json({ status: false, message: "Invalid Phone Number" });
    }
    if (!isValidEmail(email)) {
      return res
        .status(403)
        .json({ status: false, message: "Invalid Email ID" });
    }
    if (!isValidPwd(password)) {
      return res
        .status(403)
        .json({
          status: false,
          message: "Invalid Password || Password Contains 4digits pin",
        });
    }
    let bcrtptPassword = await bcrypt.hash(password, 10);
    let response = new Admin({
      name,
      phone,
      email,
      password: bcrtptPassword,
    });
    await response.save();

    return res
      .status(201)
      .json({ status: true, message: "Register Succefully" });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};

const orderList = async (req, res) => {
  try {
    let response = await BuyBook.find({ status: req.params.status }).populate(
      "student"
    );
    res.status(200).json({ status: true, message: response });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};
const statusUpdate = async (req, res) => {
  let id = req.params.id;
  let status = req.params.status;
  try {
    let responce = await BuyBook.updateOne(
      { orderId: id },
      { $set: { status } }
    );
    res.status(200).json({ status: true, message: responce });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};

const studentOrderHistory = async (req, res) => {
  try {
  } catch (error) {}
};
const orderDetailsById = async (req, res) => {
  try {
    let response = await BuyBook.findOne({ orderId: req.params.id }).populate(
      "student"
    );
    if(!response){
    return res.status(500).json({ status: false, message: "Invalid OrderID" });

    }
    res.status(200).json({ status: true, message: response });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};

const buyBookByAdmin = async (req, res) => {
  try {
    let response = await Book.findOne({ _id: req.body.bookId });
    let buyDetails = {
      student: req.body.userId,
      book: req.body.bookId,
      bookDetails: {
        name: response.name,
        image: response.image,
        description: response.description,
        price: response.price,
        quantity: req.body.quantity,
        total: req.body.total,
        category: response.category,
      },
      status: "Received",
      orderId: generateUniqueId(),
      day: req.body.day,
    };
    let buyBookr = new BuyBook(buyDetails);
    await buyBookr.save();

    let qty = parseInt(response.quantity) - parseInt(req.body.quantity);
    let result = await Book.updateOne(
      { _id: req.body.bookId },
      { $set: { quantity: qty } }
    );
    res.status(200).json({ status: true, message: buyBookr });
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};
const getUser = async (req, res) => {
  try {
    let response = await Student.findOne({ email: req.body.email });
    if (response.length == 0) {
      return res.status(403).json({ status: "false", message: "Not Found" });
    }
    res.status(200).json({ status: true, message: response });
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};

const adminProfile = async (req, res) => {
  try {
    let response = await Admin.findOne({ _id: req.admin._id });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};

const updateProfiladmin = async (req, res) => {
  try {
    let response = await Admin.updateOne(
      { _id: req.admin._id },
      { $set: req.body }
    );
    res
      .status(200)
      .json({ status: true, message: "Profile Update Successfully" });
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};
const deleteAdminAccount = async (req, res) => {
  try {
    let response = await Admin.deleteOne({ _id: req.admin._id });
    res
      .status(200)
      .json({ status: true, message: "Delete Account Successfully" });
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};


const getBookReqList = async (req, res) => {
  try {
    let response = await newBook.find().populate("student");
    res
      .status(200)
      .json({ status: true, message: response });
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};
const addBook=async(req,res)=>{
  try {
    const{category,name,author,image,description,price,quantity}=req.body;
    if(!category || !name || !author || !image || !description || !price || !quantity){
    res.status(500).json({ status: false, message: "All Field Are Required" });
    }
    let id=await Book.find().count()
    let response=new Book({
      category,name,author,image,description,price,quantity,bookId:id+1
    })
    await response.save()
    res.status(500).json({ status: false, message: "Successfully Add New Book" });


  } catch (error) {
    res.status(500).json({ status: false, message: error });
    
  }
}
module.exports = {
  adminRegister,
  orderList,
  statusUpdate,
  studentOrderHistory,
  orderDetailsById,
  buyBookByAdmin,
  getUser,
  adminProfile,
  updateProfiladmin,
  deleteAdminAccount,
  getBookReqList,
  addBook
};
