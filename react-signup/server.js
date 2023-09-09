import express from 'express';
import Database from 'better-sqlite3';
const db = new Database('fakedata.db');
db.pragma('journal_mode = WAL');

const app = express()
app.use(express.json()) 

const port = 3000

const createDatabase = db.prepare('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT NOT NULL, password TEXT NOT NULL, age INTEGER NOT NULL, email TEXT NOT NULL UNIQUE)');
const info = createDatabase.run();

app.get('/', (req, res) => {
const stmt = db.prepare('SELECT * FROM users').all();
  res.send(JSON.stringify(stmt))
})

app.post('/signup', (req, res) => {
    try {
        const stmt = db.prepare('INSERT INTO users (name, age, email, password) VALUES (@name, @age, @email, @password)');
        stmt.run({
        ...req.body
        });
        res.status(201).send('')
    } catch (error) {
        res.status(500).send("Error!")
    }
    
    // res.send(JSON.stringify(req.body["name"]))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})