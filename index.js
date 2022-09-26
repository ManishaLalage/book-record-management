const express = require("express");
    const dotenv = require("dotenv");
    //  database connection
    const DbConnection = require("./databaseConnection");
     
// importing  routes
//No need to write js extension
const usersRouter = require("./routes/users.js");
const booksRouter = require("./routes/books.js");

dotenv.config();
const app = express();
DbConnection();

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


