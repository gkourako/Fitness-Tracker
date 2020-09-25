const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3000;

// const db = require("./Models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/Workouts',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);





// app.get("/workout", (req, res) => {
//   db.gains.find()
  
// })





// app.post("/", ({body}, res) => {
//   db.Book.create(body)
//   .then(({_id}) => db.Library.findOneAndUpdate({}, { $push: { books: _id } }, { new: true }))
//   .then(dbLibrary => {
//     res.json(dbLibrary);
//   })
//   .catch(err => {
//     res.json(err);
//   });
// });

// app.get("/books", (req, res) => {
//   db.Book.find({})
//   .then(dbBook => {
//     res.json(dbBook);
//   })
//   .catch(err => {
//     res.json(err);
//   });
// });

// app.get("/library", (req, res) => {
//   db.Library.find({})
//   .then(dbLibrary => {
//     res.json(dbLibrary);
//   })
//   .catch(err => {
//     res.json(err);
//   });
// });

// app.get("/populated", (req, res) => {
//   db.Library.find({})
//   .populate("books")
//   .then(dbLibrary => {
//     res.json(dbLibrary);
//   })
//   .catch(err => {
//     res.json(err);
//   });
// });
app.use(require("./controller/html-controller"))
app.use(require("./controller/api-controller"))
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});