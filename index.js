import bodyParser from "body-parser";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();  
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.post('/submit', (req, res) => {
    const randAdj = adj[Math.floor(Math.random() * adj.length)];
    const randNoun = noun[Math.floor(Math.random() * noun.length)];
    res.render('index.ejs', { 
        adject: randAdj, 
        noun: randNoun 
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});

const adj = [
    "acidic",
    "acrobatic",
    "active",
    "actual",
    "adept",
    "admirable",
    "admired",
    "adolescent",
    "adorable",
    "adored",
    "advanced",
    "afraid",
    "affectionate",
    "aged",
    "aggravating",
    "aggressive",
    "agile",
    "agitated",
];
const noun = [
  "aardvark",
  "abacus",
  "abbey",
  "abdomen",
  "abolishment",
  "abroad",
  "abyssinian",
  "accelerant",
  "accelerator",
  "accompanist",
  "accordion",
  "account",
  "accountant",
  "achieve",
  "achiever",
  "acid",
  "acknowledgment",
  "acoustic",
  "acupuncture",
  "adapter",
];