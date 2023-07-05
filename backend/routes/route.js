const express = require("express")
const route = express.Router()
const { protect } = require('../middlewares/auth')
const { studentRegister, bothLogin, codeSend, varifyOtp, resetPassword,
    getPofile, addToCart, buyBook, orderHistory, estatmnet, addNewBook,
    orderDetails,cartDetails,updateProfile ,deleteAccount,deleteItemCart,contactMe
} = require("../controllers/StudentController")
const { adminRegister, orderList, statusUpdate, studentOrderHistory, orderDetailsById,buyBookByAdmin ,getUser,adminProfile,updateProfiladmin,deleteAdminAccount,getBookReqList,addBook} = require("../controllers/AdminController")
const { getBook, singleBook,updateBook,deleteBook,findByName } = require("../controllers/BookController")
const { protectAdmin } = require("../middlewares/adminAuth")
// route.post("/addbook", addBook)
route.get("/getbook", getBook)
route.get("/single/book/:id", singleBook)
route.get("/find/book/:name", findByName)
route.put("/edit/book/:id", updateBook)
route.delete("/delete/book/:id", deleteBook)

// student
route.post("/student/register", studentRegister)
route.post("/both/login", bothLogin)
route.get("/get/profile", protect, getPofile)
route.put("/add/cart/:id", protect, addToCart)
route.post("/buy/book", protect, buyBook)
route.post("/add/book", protect, addNewBook)
route.get("/order/details", protect, orderDetails)
route.get("/cart/details", protect, cartDetails)
route.post("/update/profile", protect, updateProfile)
route.delete("/account/delete", protect, deleteAccount)
route.delete("/delete/item/cart/:id", protect, deleteItemCart)
route.post("/contactme",contactMe)

//admin
route.post("/admin/register", adminRegister)
route.get("/order/:status", orderList)
route.put("/order/:id/:status", statusUpdate)
route.get("/order/details/:id", orderDetailsById)
route.post("/order/ByAdmin", buyBookByAdmin)
route.post("/get/user", getUser)
route.get("/get/admin/profile",protectAdmin, adminProfile)
route.post("/update/admin/profile",protectAdmin, updateProfiladmin)
route.delete("/delete/admin/profile",protectAdmin, deleteAdminAccount)
route.get("/request/list",protectAdmin, getBookReqList)
route.post("/add/book/admin",protectAdmin, addBook)






module.exports = route