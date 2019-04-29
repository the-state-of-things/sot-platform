import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import posts from './routes/posts';

const app = express();
dotenv.config();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const dbString: string = process.env.DB_STRING ? process.env.DB_STRING : '';

mongoose.connect(dbString, { useNewUrlParser: true });

app.use('/posts', posts);

// if (process.env.NODE_ENV === 'production') {
app.use(express.static(__dirname + '/public/'));

app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
// }

const port = process.env.PORT || 5000;
// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`Server started on port ${port}`));
