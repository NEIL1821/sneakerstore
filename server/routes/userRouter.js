const express = require('express');
const router = express.Router();

const { logoutUser, addUser, loginUser, getUserById, sellSneaker , likingSneakers} = require('../controllers/userCtrl');

// router.get('/', test);

router.post('/signup', addUser);

router.post('/login', loginUser);

// all routes below protected to authenticated user
router.post('/logout', logoutUser);

// router.get('/:id', auth, getUserById);
router.get('/:id', getUserById);

//1st route that gets called when listing a sneaker
router.post('/sell-sneaker', sellSneaker)

// router.put('/:id', auth, updateUser);

router.post('/liking-sneakers/:id', likingSneakers)

module.exports = router;
