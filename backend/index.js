const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/", async (req, res) => {
  const { username } = req.body;
  console.log(username)
  return res.json({username: username, secret:"sha256..."})

  try{
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        {username: username, secret: username, first_name: username},
        {headers:{"private-key":"4f18cdf4-bc32-4256-99ba-61c0286b9b25"}}
    )
    console.log(r)
    return res.status (r.status).json(r.data)
  } catch (e) {
    console.log("Index Error" + e)
    return res.status(e.response.status).json(e.response.status)
  }
});

app.listen(5173, ()=>{
  console.log("server up")
});