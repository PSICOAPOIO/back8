const express = require('express')
const router = express.Router()
const BlogController = require('../controllers/BlogController')




router.get('/meditacao', BlogController.meditacao)
router.get('/', BlogController.showMeditacao)



module.exports = router