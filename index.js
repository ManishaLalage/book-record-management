const express = require("express");

// importing  routes
//No need to write js extension
const usersRouter = require("./routes/users.js");
const booksRouter = require("./routes/books.js");
const app = express();

const PORT = 8081;

app.use(express.json());


app.get('/', (req, res) => {
  res.status(200).json({
    message: "Server is up and running",
  });
});

app.use('/users', usersRouter);
app.use('/books', booksRouter);

app.get("*", (req, res) => {
  res.status(500).json({
    message: "This route does not exist",
  });

});


app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});


