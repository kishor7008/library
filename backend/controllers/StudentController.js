const Student = require("../model/studentSchema");
const Admin = require("../model/adminSchema");
const bcrypt = require("bcryptjs");
const Book = require("../model/bookSchema");
const nodemailer = require("nodemailer");
const BuyBook = require("../model/bookBuySchema");
const generateToken = require("../utills/generateToken");
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
const { response } = require("express");
const NewBook = require("../model/newBook");
const studentRegister = async (req, res) => {
  try {
    const { name, phone, email, password } = req.body;
    let alreadyAccount = await Student.findOne({ email: email });
    if (alreadyAccount) {
      return res.status(403).json({
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
      return res.status(403).json({
        status: false,
        message: "Invalid Password || Password Contains 4digits pin",
      });
    }
    let bcrtptPassword = await bcrypt.hash(password, 10);
    let response = new Student({
      name,
      phone,
      email,
      password: bcrtptPassword,
    });
    await response.save();

    return res
      .status(201)
      .json({ status: true, message: "User Register Successfully !!" });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};
const bothLogin = async (req, res) => {
  try {
    const registeredUser = req.body;
    const { email, password } = registeredUser;
    if (!email || !password) {
      return res
        .status(400)
        .send({ status: false, message: "Email and Password is required" });
    }
    const isValidUser = await Student.findOne({ email: registeredUser.email });
    const admin = await Admin.findOne({ email: registeredUser.email });

    if (!isValidUser && !admin) {
      res.status(400).json({ status: false, message: "Invalid Credentials" });
      return;
    }

    if (isValidUser) {
      if (await bcrypt.compare(registeredUser.password, isValidUser.password)) {
        res.status(200).json({
          status: true,
          message: {
            role: isValidUser.role,
            token: generateToken(isValidUser._id),
          },
        });
      } else {
        res.status(400).json({ status: false, message: "Invalid Credentials" });
      }
    } else if (admin) {
      if (await bcrypt.compare(registeredUser.password, admin.password)) {
        res.status(200).json({
          status: true,
          message: { role: admin.role, token: generateToken(admin._id) },
        });
      } else {
        res.status(400).json({ status: false, message: "Invalid Credentials" });
      }
    } else {
      res.status(400).json({ status: false, message: "Invalid Credentials" });
    }
  } catch (err) {
    res.status(400).json({ status: false, message: err });
  }
};

// sendind opt through email
const codeSend = async (req, res) => {
  try {
    if (
      req.body.email == "" ||
      req.body == undefined ||
      req.body.email == undefined
    ) {
      return res
        .status(400)
        .send({ status: false, message: "Please fill the input box" });
    }
    const user = await Student.findOne({ email: req.body.email });

    const admin = await Admin.findOne({ email: req.body.email });
    if (!user && !admin) {
      return res.status(400).send({ status: false, message: "Invalid Email" });
    }
    if (user) {
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "kishor@hminnovance.com",
          pass: "giieclezvvlsemmu",
        },
      });
      let otpnum = Math.floor(Math.random() * 90000) + 10000;
      let addotp = await Student.findOneAndUpdate(
        { email: req.body.email },
        { $set: { otp: otpnum } }
      );

      var mailOptions = {
        from: "kishor@hminnovance.com",
        to: `${req.body.email}`,
        subject: `Reset Password`,
        text: `
                Please use the following OTP Code to reset your password: ${otpnum}

                If you did not request a password change, please feel free to ignore this message.
                
                If you have any comments or questions don't hesitate to reach us at ${process.env.EMAIL_NAME}
                Please feel free to respond to this email. It was sent from a monitored email address, and we would love 
                to hear from you.

                Thanks,
                The GoodWill Homz Team
        `,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      const token = generateToken(user._id);
      res
        .status(200)
        .json({ status: true, message: { token: token, role: user.role } });
    } else if (admin) {
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "kishor@hminnovance.com",
          pass: "giieclezvvlsemmu",
        },
      });
      let otpnum = Math.floor(Math.random() * 90000) + 10000;
      let addotp = await Admin.findOneAndUpdate(
        { email: req.body.email },
        { $set: { otp: otpnum } }
      );

      var mailOptions = {
        from: "kishor@hminnovance.com",
        to: `${req.body.email}`,
        subject: `Reset Password `,
        text: `
                Please use the following OTP Code to reset your password: ${otpnum}

                If you did not request a password change, please feel free to ignore this message.
                
                If you have any comments or questions don't hesitate to reach us at ${process.env.EMAIL_NAME}
                Please feel free to respond to this email. It was sent from a monitored email address, and we would love to hear from you.

                Thanks,
                The GoodWill Homz Team
                
        `,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      let token = generateToken(admin._id);

      res
        .status(200)
        .json({ status: true, message: { token: token, role: admin.role } });
    }
  } catch (err) {
    res.status(500).json({ status: false, message: err });
  }
};

// varify otp of email and database

const varifyOtp = async (req, res) => {
  if (!req.body.otp) {
    return res
      .status(400)
      .json({ status: false, message: "Please Put Your Otp" });
  }
  const varifyOtp = await Student.findOne({ _id: req.user._id });

  if (!varifyOtp) {
    res.status(400).json({ status: false, message: "Time Limit Expiry" });
  }
  try {
    if (varifyOtp.otp == req.body.otp) {
      res.status(200).json({ status: true, message: "Success" });
    } else {
      res.status(400).json({ status: false, message: "Put valid OTP" });
    }
  } catch (error) {
    res.json(error);
  }
};

// reset password
const resetPassword = async (req, res) => {
  try {
    if (
      req.body.password == "" ||
      req.body == undefined ||
      req.body.password == undefined
    ) {
      return res
        .status(400)
        .send({ status: false, message: "Please fill the input box" });
    } else if (!isValidPwd(req.body.password)) {
      return res
        .status(400)
        .send({ status: false, message: "Password should be 4 digit pin" });
    } else {
      let hashPass = await bcrypt.hashSync(req.body.password, 10);
      let sucess = await Users.findByIdAndUpdate(
        { _id: req.user._id },
        { $set: { password: hashPass } }
      );
      res
        .status(200)
        .json({ status: true, message: "Successful reset password" });
    }
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};

const getPofile = async (req, res) => {
  try {
    res.send(req.student);
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};

const addToCart = async (req, res) => {
  try {
    let response = await Book.findOne({ _id: req.params.id });
    let employee = await Student.findOne({ _id: req.student._id });
    let arr = [...employee.cart, response._id];
    await Student.updateOne({ _id: req.student._id }, { $set: { cart: arr } });
    res.status(200).json({ status: true, message: "Add to cart succefully" });
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};

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

const buyBook = async (req, res) => {
  try {
    let response = await Book.findOne({ _id: req.body.bookId });
    let buyDetails = {
      student: req.student._id,
      book: req.body.bookId,
      bookDetails: {
        name: response.name,
        image: response.image,
        description: response.description,
        price: response.price,
        quantity: req.body.quantity,
        total: response.price * req.body.quantity,
        category: response.category,
      },
      status: "Pending",
      orderId: generateUniqueId(),
      day: req.body.day,
    };
    let buyBookr = new BuyBook(buyDetails);
    await buyBookr.save();
    // let students = [...response.sellTo, req.student._id]
    // let result = await Book.updateOne({ bookId: req.params.id }, { $set: { sellTo: students } })
    res.status(200).json({ status: false, message: "Order Create Succefully"});
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};

const addNewBook = async (req, res) => {
  try {
    let response = new NewBook({
      student: req.student._id,
      name: req.body.book,
    });
    await response.save();
    res.status(201).json({ status: true, message: "Add Book Successufully" });
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};

const orderDetails = async (req, res) => {
  try {
    let response = await BuyBook.find({ student: req.student._id });
    res.status(200).json({
      status: true,
      message: response,
    });
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};
const cartDetails = async (req, res) => {
  try {
    let response = await Student.findOne({ _id: req.student._id }).populate(
      "cart"
    );
    res.status(200).json({
      status: true,
      message: response,
    });
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};

const updateProfile = async (req, res) => {
  try {
    let response = await Student.updateOne(
      { _id: req.student._id },
      { $set: req.body }
    );
    res
      .status(200)
      .json({ status: true, message: "Profile Update Successfully" });
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};

const deleteAccount = async (req, res) => {
  try {
    let response = await Student.deleteOne({ _id: req.student._id });
    res
      .status(200)
      .json({ status: true, message: "Delete Account Successfully" });
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};
const deleteItemCart = async (req, res) => {
  try {
    let userDetails = await Student.findOne({ _id: req.student._id });
    let fcart = userDetails.cart.filter(
      (item) => item.valueOf() != req.params.id
    );
    let response = await Student.updateOne(
      { _id: req.student._id },
      { $set: { cart: fcart } }
    );
    res.status(200).json({ status: true, message: "Removed" });
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};

const contactMe = async (req, res) => {
  try {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: " kishor@hminnovance.com",
        pass: "ixkgftggntqtuqhj",
      },
    });
    var mailOptions = {
      from: "kishor@hminnovance.com",
      to: "pspkbabul@gmail.com",
      subject: `Someone Contact U`,
      text: `
              Hiii I am ${req.body.name},
      
                      Email   : ${req.body.email}
                      Message : ${req.body.message}
              Thanks,
              Memorial Library
      `,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    res
      .status(200)
      .json({ status: true, message: "Thank You For Connecting !!" });
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};
module.exports = {
  studentRegister,
  bothLogin,
  codeSend,
  varifyOtp,
  resetPassword,
  getPofile,
  addToCart,
  buyBook,
  addNewBook,
  orderDetails,
  cartDetails,
  updateProfile,
  deleteAccount,
  deleteItemCart,
  contactMe,
};
