const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
});

// GET /gallery
router.get('/', (req, res) => {
  const sqlQueryText =
    `
      SELECT * FROM gallery
      ORDER BY "id";
    `
  pool.query(sqlQueryText)
    .then((result) => {
      res.send(result.rows)
    })
    .catch((error) => {
      console.error(error)
      res.sendStatus(500)
    })
});

module.exports = router;
