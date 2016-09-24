// require app, mongoose
var app = require('./server/server.js');
var mongoose = require('mongoose');
var worker = require('./server/workers/ticketmasterfetcher.js')


// set mongoURI
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/codebrewers';

// connect db
mongoose.connect(mongoURI);

// set port
var port = process.env.PORT || 1337;

// listen on port
app.listen(port);

console.log("Server is listening on port " + port);


//Ticket Master data fetcher
//setInterval(worker.fetchTM, 10000);
worker.fetchTM();
