const express = require('express');
const dbU = require('../src/db/crudUsers.js');
const router = express.Router();


router.get('/', function(req, res) {
    dbU.getUsers(function(arrayUsers) {
        res.send(arrayUsers);
    })
})

router.get('/:id', function(req, res) {
    const uid = req.params.id;
    dbU.getUser(uid, function(User) {
        res.json(User);
    })
})

router.post('/', (req, res) => {
    const User = req.body;
    dbU.addUser(User, function(response) {
        res.send(response);
    })
})

router.put('/:id', (req, res) => {
    const uid = req.params.id;
    const User = req.body;
    dbU.updateUserTotally(uid, User, function(response) {
        res.send(response)
    })
})

router.patch('/:id', (req, res) => {
    const uid = req.params.id;
    const User = req.body;
    dbU.updateUserPartial(uid, User, function(response) {
        res.send(response)
    })
})

router.delete('/:id', (req, res) => {
    const uid = req.params.id;
    dbU.deleteUser(uid, function(response) {
        res.send(response);
    })
})

module.exports = router;