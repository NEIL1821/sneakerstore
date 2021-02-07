const express = require('express');
const multer = require('multer');
const router = express.Router();
const storage = multer.diskStorage({});
const upload = multer({ storage });

// const { user, updateUser } = require('../controllers/user');
const { logoutUser, addUser, loginUser , getUserById} = require('../controllers/userCtrl');
const { addSneaker } = require('../controllers/sneakerCtrl');
// const { signup, signin } = require('../controllers/auth');

// auth routes
// router.post('/signup', signup);
// router.post('/signin', signin);

router.post('/login', loginUser);
router.post('/signup', addUser);
router.post('/logout', logoutUser);

// user routes

// router.put('/update-user/:id', updateUser);
// router.get('/get-user/:id', user);

// sneaker upload
router.post('/uploadSneaker', upload.single('file'), addSneaker);

module.exports = router;
