import express from 'express';
import mongoose from 'mongoose';
import chalk from 'chalk';
import Cors from 'cors';
import dotEnv from 'dotenv';

import HttpError from './models/http-error';
import Cards from './models/dbCards-schema';

const MONGO_URL = `mongodb+srv://ashwin1014:${process.env.MONGO_KEY}@cluster0.5ui3g.mongodb.net/tinderDB?retryWrites=true&w=majority`;

// App Config
dotEnv.config();

const app = express();
const port = process.env.PORT || 8001;

// Middleware
app.use(express.json());
app.use(Cors());

// DB Config
mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

// API Endpoints

app.get('/', (req, res) => res.status(200).send('Hello'));

app.post('/tinder/card', (req, res) => {
    const dbCard = req.body;
    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});

app.get('/tinder/card', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});

// handle route not found
app.use(() => {
    const error = new HttpError('Route not found', 404);
    throw error;
});

// Listener
app.listen(port, () => console.log(chalk.blue(`Listening on localhost: ${port}`)));
