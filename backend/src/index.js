// Description: This is the main file for the application
// Author: Sebastián Gámez Ariza

// Importing the app
import app from './app.js';

// Import the connection to the database
import connectDatabase from './database/food.database.js';

// Importing the environment variables
import {PORT, URI_MONGO} from './config/env.config.js';

// Connect to the database;
connectDatabase(URI_MONGO);

// Setting the port
const port = PORT || 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
