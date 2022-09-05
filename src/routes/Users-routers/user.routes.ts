import * as userControl from '../../controllers/users.controllers';
import { Router } from 'express';
import AuthanticateMiddleware from '../../middlewares/Auth.midlwares';

const router = Router();

router
	.route("/user")
	.post(userControl.CreateNewUser)
	.get(AuthanticateMiddleware, userControl.GetAllUsers)
	.delete(AuthanticateMiddleware, userControl.DeleteAllUser);
	
	router
	.route("/user/:id")
	.get(AuthanticateMiddleware, userControl.GeteUser)
	.put(AuthanticateMiddleware, userControl.UpdateUser)
	.delete(AuthanticateMiddleware, userControl.DeleteUser);

	
router.post("/login",userControl.AuthanticateUser);

export default router;
