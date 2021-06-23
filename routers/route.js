const index = require('express').Router()

const data = require('./data/data')

index.use('/data', data)

module.exports = index
