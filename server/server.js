import express from 'express';
// import mongoose from 'mongoose';
import chalk from 'chalk';

// App Config

const app = express();
const port = process.env.PORT || 8001;

// Middleware

// DB Config

// API Endpoints

app.get('/', (req, res) => res.status(200).send('Hello'));

// Listener
app.listen(port, () => console.log(chalk.blue(`Listening on localhost: ${port}`)));
