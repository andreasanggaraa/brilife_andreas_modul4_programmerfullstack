const router = require('express').Router();
const AgenController = require('../controllers/AgenController');
const AgenStrukturController = require('../controllers/AgenStrukturController');

router.get('/', (req, res) => {
    res.send(`Nothing here. Go to another route`);
})

router.get('/agen', AgenController.findAll);
router.post('/agen', AgenController.register);
router.post('/agen-struktur', AgenStrukturController.create);
router.get('/sa', AgenController.findSA);
router.get('/la', AgenController.findAL);

module.exports = router