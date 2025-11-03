const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://blogs:blogspass123@cluster1.5887fpd.mongodb.net/?appName=Cluster1', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'blogdb'  // Make sure this database exists in your MongoDB Atlas
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

module.exports = db;
