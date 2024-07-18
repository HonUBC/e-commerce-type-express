"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 3333;
// Serve static files from the dist directory
app.use(express_1.default.static(path_1.default.join(__dirname, '../../dist')));
// Middleware to parse JSON bodies
app.use(body_parser_1.default.json());
// Route to handle form submission
app.post('/submit', (req, res) => {
    const { name, age } = req.body;
    console.log(`name::${name}`);
    console.log(`age::${age}`);
    //   res.send(`Name: ${name}, Age: ${age}`);
    res.sendStatus(200);
});
// Route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../../index.html'));
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
