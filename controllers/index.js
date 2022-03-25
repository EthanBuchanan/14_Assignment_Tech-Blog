const router = require('express').Router();


// For future referance
/*

const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);

*/

const apiRoutes = require('./api');
const preRoutes = require('./preAuth');
const authRoutes = require('./Auth');
const postRoutes = require('./postAuth');

router.use('/api', apiRoutes);
router.use('/', preRoutes);
router.use('/', authRoutes);
router.use('/', postRoutes);

module.exports = router;