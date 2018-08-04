const express = require("express")

const app = express()


app.get("/api/v1/health", (req, res) => {

  res.json({ ok: "ok" })
})

app.listen(8080, () => {
  console.log("server started at port 8080")
})