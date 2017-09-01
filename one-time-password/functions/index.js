const admin = require('firebase-admin');
const functions = require('firebase-functions');
const createUser = require('./create_user');
const createPassword = require('./create_password');
const verifyPassword = require('./verify_password');
const serviceAccount = require('./service_account.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://one-time-password-e3a68.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);

exports.createPassword = functions.https.onRequest(createPassword);

exports.verifyPassword = functions.https.onRequest(verifyPassword);