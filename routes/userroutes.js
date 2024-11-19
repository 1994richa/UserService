const express = require('express');
const { createuser, getAllusers, getuserById, updateuser, deleteuser } = require('../controllers/userController');

const router = express.Router();

router.post('/', createuser);
router.get('/', getAllusers);
router.get('/:id', getuserById);
router.put('/:id', updateuser);
router.delete('/:id', deleteuser);

module.exports = router;
