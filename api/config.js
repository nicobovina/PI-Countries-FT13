require('dotenv').config();

module.exports = {
    api: {
        host: process.env.HOST || 'localhost',
        // host: process.env.HOST || '0.0.0.0',
        port: process.env.PORT || 3001
    },
    db:{
        user: process.env.DB_USER,
        pass: process.env.DB_PASS
    }
}