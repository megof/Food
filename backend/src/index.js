// Description: This is the main file for the application

// Importing the app
import app from './app.js';

// Import the connection to the database
import connectDatabase from './database/foodDatabase.js';

// Importing the environment variables
import {PORT, URI_MONGO} from './config.js';

// Connect to the database;
connectDatabase(URI_MONGO);

// Setting the port
const port = PORT || 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
