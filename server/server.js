const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

// routers
const gameRouter = require('./routes/Games');
app.use('/api/games', gameRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})