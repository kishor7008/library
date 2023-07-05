const Book = require("../model/bookSchema");
let bookList = require("../bookList");

const addBook = async (req, res) => {
  try {
    let list = [];
    bookList.map((item, index) => {
      let str = item.name;
      let arr = str.split(" ");
      let midIndex = arr.indexOf("BY");
      let str1 = "";
      for (let i = 0; i < midIndex; i++) {
        str1 += " " + arr[i];
      }
      let str2 = "";
      for (let j = midIndex + 1; j < arr.length; j++) {
        str2 += " " + arr[j];
      }

      let obj = {
        category: item.category,
        name: str1,
        author: str2,
        price: Math.floor(Math.random() * 21) + 10,
        description: item.description,
        image: item.image,
        quantity: Math.floor(Math.random() * 10),
        bookId: index,
      };
      list.push(obj);
    });
    await Book.insertMany(list);
    res.json(list);
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};
const getBook = async (req, res) => {
  try {
    let response = await Book.find();
    return res.status(201).json({ status: true, message: response });
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

const singleBook = async (req, res) => {
  try {
    let response = await Book.findOne({ bookId: req.params.id });
    return res.status(201).json({ status: true, message: response });
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

const updateBook = async (req, res) => {
  try {
    let response = await Book.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json({ status: true, message: "Update Successfuly" });
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};

const deleteBook = async (req, res) => {
  try {
    let response = await Book.deleteOne({ _id: req.params.id });
    res.status(200).json({ status: true, message: "Delete Successfuly" });
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};
const findByName = async (req, res) => {
  try {
    let response = await Book.findOne({ name: req.params.name });
    res.status(200).json({ status: true, message: response });
  } catch (error) {
    return res.status(500).json({ status: false, message: error });
  }
};
module.exports = {
  addBook,
  getBook,
  singleBook,
  updateBook,
  deleteBook,
  findByName,
};
