'use strict'
const express = require('express')
const router = express.Router()
const multer  = require('multer')
const fs = require('fs')

// File is uploaded into a buffer Memory
const storage = multer.memoryStorage()
const upload = multer({storage: storage})
const request = require("request")

router.get('/uploads', (req, res, next) => {
  return res.json({status: "endpoint exists"})
})

router.post('/uploads', upload.single('file'), async function (req, res, next) {
  // demo server route for multipart data uploads
  console.log('FILE', req.file);
  return res.json({status: "success"})
})


module.exports = router
