const express = require('express');
const app = express();
const routes = require('./routes/index');
const PORT = 3000;

app.use(express.json());

app.use('/', routes);

app.use((req, res, next) => {
    res.status(404).send('404 - Not Found');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong! Please try again later.');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
