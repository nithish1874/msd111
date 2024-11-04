const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // For serving static files (if needed)

// Route to display the registration form
app.get('/', (req, res) => {
    res.render('users');
});

// Handle form submission
app.post('/register', (req, res) => {
    // Here you can handle the registration logic (e.g., save to database)
    console.log(req.body); // Display submitted data in the console
    res.send('Registration successful!'); // Temporary response
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
