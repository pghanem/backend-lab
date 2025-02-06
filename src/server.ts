import express from 'express';
import path from 'path';
import restApi from './pocs/http/rest-api';  // Import the HTTP POC route

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies of incoming requests
app.use(express.json());

// Mount the HTTP POC router at '/api/restApi'
app.use('/restApi', restApi);  // This means the HTTP POC route will be accessible under '/api/restApi'

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, '../public')));

// Default route to serve the index.html
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));  // Serve the front-end HTML file
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});