const express = require("express")

const app = express()


const events = [

]

app.get("/api/v1/health", (req, res) => {

  res.json({ ok: "ok" })
})


app.post("/api/v1/events", (req, res) => {
  const { body: attrs } = req
  events.push(attrs)

  res.json({ acknowledge: true })
})


app.get("/api/v1/events", (req, res) => {

  res.json(events)
})

app.listen(8080, () => {
  console.log("server started at port 8080")
})