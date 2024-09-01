const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000; // You can change the port number if needed

// Serve all files in the current directory
app.use(express.static(path.join(__dirname)));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
