'use strict'
const express = require('express')
const router = express.Router()
const multer  = require('multer')
const fs = require('fs')

// File is uploaded into a buffer Memory
const storage = multer.memoryStorage()
const upload = multer({storage: storage})
const request = require("request")

router.get('/upload', (req, res, next) => {
  return res.json({status: "endpoint exists"})
})

router.post('/upload', upload.single('file'), async function (req, res, next) {
  // demo server route for multipart data uploads
  console.log('FILE', req.file, req.body.caseId);
  return res.json({message: "success"})
})


module.exports = router
