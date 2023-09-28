const mongoose = require('mongoose');
require('dotenv').config()

const connection = mongoose.connect(process.env.MONGO_DB_SECRET_KEY)

module.exports = {connection}