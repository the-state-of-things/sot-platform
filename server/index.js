import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import posts from './routes/posts';
const app = express();
dotenv.config();
// Middleware
app.use(bodyParser.json());
app.use(cors());
const dbString = process.env.DB_STRING ? process.env.DB_STRING : '';
//TODO: Can we only allow db access from server? will we then have to pay for another server?
mongoose.connect(dbString, { useNewUrlParser: true }).catch((err) => console.error(err));
app.use('/posts', posts);
// if (process.env.NODE_ENV === 'production') {
app.use(express.static(__dirname + '/public/'));
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
// }
const port = process.env.PORT || 5000;
app.listen(port, () => console.info(`Server started on port ${port}`));
//# sourceMappingURL=index.js.map