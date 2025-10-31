import express from 'express';

const app = express();

const PORT = 3003;

const booking = []

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`)
});

app.get('/confirm', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/confirmation.html`)
});

app.post('/submit-request', (req, res) => {
    const bookings = {
        destination: req.body.destination,
        date: req.body.date,
        numTravel: req.body.numTravel
    };

    booking.push(bookings);
    console.log(booking);

    res.sendFile(`${import.meta.dirname}/views/confirmation.html`)
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});