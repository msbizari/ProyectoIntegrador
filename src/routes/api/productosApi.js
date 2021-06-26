const express = require('express');
const router = express.Router();
const mainApiController = require('../../controllers/api/mainApiController');

router.get('/', mainApiController.list);
router.get('/:id', mainApiController.detail);
router.get('/image/:id', mainApiController.sendImage)


module.exports = router;