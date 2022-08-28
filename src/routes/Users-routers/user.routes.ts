import * as userControl from '../../controllers/users.controllers';
import { Router } from 'express';

const router = Router();

router
	.route("/user")
	.post(userControl.CreateNewUser)
	.get(userControl.GetAllUsers)
    .put(userControl.UpdateUser)
    .delete(userControl.DeleteAllUser);

router.route('/user/:id').delete(userControl.DeleteUser)
router.post('/user/auth',userControl.AuthanticateUser)

export default router;
