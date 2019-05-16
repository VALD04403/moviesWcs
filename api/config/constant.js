const path = require('path');

const NODE_PORT = process.env.NODE_PORT ? process.env.NODE_PORT : '3000';

const DB = process.env.DB ? process.env.DB : 'movie';
const DB_HOST = process.env.DB_HOST ? process.env.DB_HOST : 'localhost';
const DB_PASSWORD = process.env.DB_PASSWORD ? process.env.DB_PASSWORD : 'woodcutters';
const DB_USER = process.env.DB_USER ? process.env.DB_USER : 'root';
const DB_PORT = process.env.DB_PORT ? process.env.DB_PORT : '3306';
const DB_URI = process.env.DB_URI ? process.env.DB_URI : '';

module.exports.NODE_PORT = NODE_PORT;
module.exports.DB = DB;
module.exports.DB_HOST = DB_HOST;
module.exports.DB_PASSWORD = DB_PASSWORD;
module.exports.DB_USER = DB_USER;
module.exports.DB_PORT = DB_PORT;
module.exports.DB_URI = DB_URI;