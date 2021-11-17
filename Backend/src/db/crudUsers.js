const db = require('./firebase.js');

function getUsers(callback) {
    return db.collection('Users').get()
        .then((refDoc) => {
            var arrayUsers = [];
            refDoc.forEach((doc) => {
                arrayUsers.push(doc.data());
                //console.log(doc.id, '=>', doc.data());
            })
            callback(arrayUsers);
        })
        .catch(err => {
            //console.error(`Error to get Users ${err}`);
            callback(`Error to get Users ${err}`);

        })
}

function getUser(uid, callback) {
    return db.collection('Users').doc(uid).get()
        .then((doc) => {
            callback(doc.data())
        })
        .catch((err) => {
            callback(`Error to get Users ${err}`);
        })
}

function addUsers(User, callback) {
    return db.collection('Users').add(User)
        .then(() => {
            callback("Save")
        })
        .catch((err) => {
            callback(`Error to add Users ${err}`);
        })
}

function updateUsersTotally(uid, User, callback) {
    return db.collection('Users').doc(uid).set(User)
        .then(() => {
            callback("Success");
        })
        .catch((err) => {
            callback(`Error to update Users ${err}`);
        })
}

function updateUsersPartial(uid, User, callback) {
    return db.collection('Users').doc(uid).update(User)
        .then(() => {
            callback("Success");
        })
        .catch((err) => {
            callback(`Error to update Users ${err}`);
        })
}

function deleteUsers(uid, callback) {
    return db.collection('Users').doc(uid).delete()
        .then(() => {
            callback("Success");
        })
        .catch((err) => {
            callback(`Error to delete Users ${err}`);
        })
}

module.exports = {
    getUsers,
    getUser,
    addUsers,
    updateUsersPartial,
    updateUsersTotally,
    deleteUsers
}