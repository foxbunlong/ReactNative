const admin = require('firebase-admin');

module.exports = function (request, response) {
    // Verify user provided a phone
    if (!request.body.phone) {
        return response.status(422).send({ error: 'Bad input' });
    }

    // Format phone number to remove - and parens
    const phone = String(request.body.phone).replace(/[^\d]/g, ""); // Find any match character not a digit

    // Create new user account using that phone number
    // Respond to user request, saying account is created
    admin.auth().createUser({ uid: phone })
        .then(user => response.send(user))
        .catch(err => response.status(422).send({ error: err }));
}
