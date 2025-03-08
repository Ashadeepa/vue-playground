import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cookieParser());

// Configure CORS
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your app's URL
    credentials: true // Allow credentials (cookies) to be sent
}));

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

app.get('/getData', (req, res) => {
    const cookies = req.cookies;
    res.json({ message: 'Data retrieved successfully', cookies });
});