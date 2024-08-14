import express from 'express'
import { deleteUser,updateUser,getSingleUser,getAllUser } from '../controllers/userController.js';
const router = express.Router();

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';
// update User
router.put('/:id',verifyUser, updateUser);
// delete User
router.delete('/:id', verifyUser, deleteUser);
// getSingle User
router.get('/:id', verifyUser,getSingleUser);
// getAll User
router.get('/', verifyAdmin, getAllUser);

export default router;