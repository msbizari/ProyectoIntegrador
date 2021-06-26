const express = require('express');
const router = express.Router();
const userApiController = require('../../controllers/api/userApiController');

router.get('/', userApiController.list);
router.get('/:id', userApiController.detail);
router.get('/image/:id', userApiController.sendImage)

module.exports = router;