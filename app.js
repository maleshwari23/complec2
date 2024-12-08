const express = require('express');
const app = express();
const port = 3000;

// Define a GET route
app.get('/', (req, res) => {
    res.send("kastam");
});

// Start the server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});


