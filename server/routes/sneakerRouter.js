const express = require('express');
const router = express.Router();

const { addSneakerDB, getSneaker, purchasedSneaker , getAllSneakers } = require('../controllers/sneakerCtrl');

//second route that gets called when selling a sneaker 
router.post('/add-sneaker-in-DB', addSneakerDB); 

router.get('/get-sneaker/:id', getSneaker);

router.get('/get-sneakers', getAllSneakers);

router.post('/purchased-sneaker/:id', purchasedSneaker);

module.exports = router;
