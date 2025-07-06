import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

// Filename and dirname fix for not working
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend', 'public')));

// EJS Setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../frontend'));


app.get('/', (req, res) => {
  res.render('index');
});