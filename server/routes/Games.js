const express = require('express');
const router = express.Router();
const db = require('../db/index.js');

// get all games
router.get('/', async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM games");
    res.status(200).json(result.rows);
  }
  catch (err) {
    console.log(err);
  }
});

// get a specific game
router.get('/:id', async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM games WHERE game_id = $1", [req.params.id]);
    res.status(200).json(result.rows[0]);
  }
  catch (err) {
    console.log(err);
  }
})

// create a game
router.post('/', async (req, res) => {

})

// update a specific game
router.put('/:id', async (req, res) => {

})

// delete a specific game
router.delete('/:id', async (req, res) => {
  
})

module.exports = router;