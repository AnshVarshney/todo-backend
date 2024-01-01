import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDb from './config/connectDb.js';
import noteRoute from './routes/NoteRoute.js';

const app = express();
const PORT = 3000;

connectDb();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/notes',noteRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
