const router = require('express').Router();

const authRoutes = require('./Auth');
const postsRoutes = require('./posts');

router.use('/', authRoutes);
router.use('/', postsRoutes);

module.exports = router;