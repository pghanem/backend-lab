import mysql from 'mysql2';

// Ensure all env variables are loaded
import dotenv from 'dotenv';
dotenv.config();

// Get the environment variables and cast where necessary
const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3307,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

// Test the connection
connection.connect((err) => {
	if (err) {
		console.error('Error connecting to the database:', err.stack);
		return;
	}
	console.log('Connected to the database.');
});

export default connection;
