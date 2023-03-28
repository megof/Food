// Description: This file contains the connection to the database
// Author: Sebastián Gámez Ariza

// Importing the mongoose library
import mongoose from 'mongoose';

// Creating the connection to the database function
const connectDatabase = async(url) => {
	// Try to connect to the database
	try{
		await mongoose.connect(url)
		// Log the success message
		console.log('Database connected');
	} catch(error){
		// Log the error message
		console.log(error);
	}
};

// Exporting the connectDatabase function
export default connectDatabase;