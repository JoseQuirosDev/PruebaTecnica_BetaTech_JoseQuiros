import express from 'express';
import { getMeHandler, deleteUserHandler,  updateUserHandler} from '../controllers/user.controller';
import { deserializeUser } from '../middleware/deserializeUser';
import { requireUser } from '../middleware/requireUser';
import { validate } from '../middleware/validate';
import {  updateUserSchema, deleteUserSchema} from '../schemas/user.schema';
const router = express.Router();

router.use(deserializeUser, requireUser);

// Get currently logged in user
router.get('/me', getMeHandler);


// /api/users/idUserToDelete
router
    .route('/:userId')
    .delete(validate(deleteUserSchema), deleteUserHandler)
    .patch(validate(updateUserSchema), updateUserHandler)
export default router;
