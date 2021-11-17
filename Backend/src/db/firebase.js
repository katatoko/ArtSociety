const admin = require('firebase-admin');
const serviceAccount = require('./artsociety-8b2b9-88e9f2433cbf.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = db;