import express from "express";

//const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {

  res.status(401).json({
    ok: true,
    msg: 'User not found'
  })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})