var api = require('./userController');
var express = require('express');
var router = express.Router();

// router.post('/uploadMT101File', api.uploadMT101File);
router.get('/testUser', api.testUser);
router.post('/testDatabase', api.testDatabase);

module.exports = router;