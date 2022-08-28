import * as userControl from '../../controllers/users.controllers';
import { Router } from 'express';
import AuthanticateMiddleware from '../../middlewares/Auth.midlwares';

const router = Router();

router
	.route("/user")
	.post(AuthanticateMiddleware, userControl.CreateNewUser)
	.get(AuthanticateMiddleware, userControl.GetAllUsers)
	.put(AuthanticateMiddleware, userControl.UpdateUser)
	.delete(AuthanticateMiddleware, userControl.DeleteAllUser);

router
	.route("/user/:id")
	.delete(AuthanticateMiddleware, userControl.DeleteUser);
router.post("/user/auth", AuthanticateMiddleware, userControl.AuthanticateUser);

export default router;
