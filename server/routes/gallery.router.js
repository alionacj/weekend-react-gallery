const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  const id = req.params.id
  const sqlQueryText = 
    `
      UPDATE gallery
      SET likes = likes + 1
      WHERE id = ${id}
    `
  pool.query(sqlQueryText)
    .then((result) => {
      res.sendStatus(200)
    })
    .catch((error => {
      res.sendStatus(500)
    }))
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
