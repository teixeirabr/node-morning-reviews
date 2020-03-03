// const name = "Andre";
// console.log(name);

const express = require("express");
const app = express();
const port = 4338;
const users = require("../users.json");

app.get("/api/users", (req, res) => {
  res.status(200).send(users);
});

// get something more specific

app.get("/api/users/:identifier", (req, res) => {
  const { identifier } = req.params; // if i dont want to destructure just use req.params.identifier

  const user = users.find(e => e.id === +identifier); //changer identifier to a string. parseInt or use + or *. req.params.identifier

  if (!user) {
    return res.status(500).send("Unable to find user");
  }

  res.status(200).send(user);
});

// app.use(express.json())
app.listen(port, () => console.log(`server running on ${port}`));
