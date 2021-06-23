require('dotenv').config()

const sql = require('../config/db')

// http://localhost:5001/data/get-all-data (GET)
const getAllData = (req, res) => {
  let message = ''
  let error = ''
  let data = ''
  sql.query('SELECT * FROM account ORDER BY id DESC', function (err, results) {
    if (err) {
      throw err 
    } else {
      message = 'Success'
      data = results
      let returnMessage = {
        message: message,
        error: error,
        data: data
      }
      res.json(returnMessage)
    }
  })
}

// http://localhost:5001/data/insert-data (POST)
// {
//   "title": "test 5",
//   "total": 300000,
//   "type": "expense"
// }
// IF type = expense, current balance - total,
// IF type = income, current balance + total
const insertData = (req, res) => {
  const { title, type, total } = req.body
  let message = ''
  let error = ''
  let data = ''
  let balance = 0
  sql.query('SELECT * FROM account ORDER BY id DESC LIMIT 1', function (err, results) {
    if (err) {
      throw err 
    } else {
      if (type === 'income') {
        balance = results[0].balance + total
      } else if (type === 'expense') {
        balance = results[0].balance - total
      }

      sql.query(`INSERT INTO account(type, title, total, balance) VALUES ('${type}', '${title}', ${total}, ${balance})`, function (err, results) {
        if (err) {
          message = 'Failed'
          error = err
          throw err 
        } else {
          message = 'Success'
        }

        let returnMessage = {
          message: message,
          error: error,
          data: data
        }
        res.json(returnMessage)
      })
    }
  })
}

// http://localhost:5001/data/delete-data (DELETE)
// {
//   "id": "5"
// }
const deleteData = (req, res) => {
  const { id } = req.body
  let message = ''
  let error = ''
  let data = ''
  sql.query(`DELETE FROM account WHERE id = ${id}`, function (err, results) {
    if (err) {
      error = err
      message = 'Failed'
      throw err 
    } else {
      message = 'Success'
      data = ''
    }
    let returnMessage = {
      message: message,
      error: error,
      data: data
    }
    res.json(returnMessage)
  })
}

module.exports = {
  getAllData,
  insertData,
  deleteData
}