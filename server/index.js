const cors = require('cors');
const express = require('express');
const router = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');
const morgan = require('morgan');
const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));

app.use(router);
app.use(errorHandler);


app.listen(PORT, () => console.log(`You're listening to PORT: ${PORT}`));