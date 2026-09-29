const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const Student = require('./Models/Student');

const app = express();

// Middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(express.json()); // Parse JSON data for API
app.use(session({
    secret: 'secret_key_123',
    resave: false,
    saveUninitialized: true
}));

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/ICT3A")
.then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ==========================================
// 1 & 2. REGISTRATION & LOGIN ROUTES (EJS)
// ==========================================

app.get('/register', (req, res) => res.render('register'));

app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newStudent = new Student({ name, email, password });
        await newStudent.save();
        res.redirect('/login');
    } catch (err) {
        res.status(400).send("Error registering user. Email might exist.");
    }
});

app.get('/login', (req, res) => res.render('login'));

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const student = await Student.findOne({ email, password });
    
    if (student) {
        req.session.studentId = student._id;
        req.session.studentName = student.name;
        res.redirect('/dashboard');
    } else {
        res.send("Invalid Email or Password. <a href='/login'>Try Again</a>");
    }
});

// ==========================================
// 3 & 5. DASHBOARD & LOGOUT ROUTES
// ==========================================

app.get('/dashboard', (req, res) => {
    if (!req.session.studentId) {
        return res.redirect('/login'); // Block access if not logged in
    }
    res.render('dashboard', { name: req.session.studentName });
});

app.get('/logout', (req, res) => {
    req.session.destroy(); // Destroy session
    res.redirect('/login');
});

// ==========================================
// 4. API ENDPOINTS FOR PHP CLIENT
// ==========================================

// POST API: Save student from PHP
app.post('/api/students', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newStudent = new Student({ name, email, password });
        await newStudent.save();
        res.status(201).json({ message: "Student created via API successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET API: Send student data to PHP
app.get('/api/students', async (req, res) => {
    try {
        const students = await Student.find().select('-password'); // Exclude passwords
        res.json(students);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));