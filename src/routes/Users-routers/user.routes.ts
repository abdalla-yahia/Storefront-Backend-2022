import * as userControl from '../../controllers/users.controllers';
import { Router } from 'express';
import AuthanticateMiddleware from '../../middlewares/Auth.midlwares';

const router = Router();

router
	.route("/user")
	.post(userControl.default.CreateNewUser)
	.get(AuthanticateMiddleware, userControl.default.GetAllUsers)
	.delete(AuthanticateMiddleware, userControl.default.DeleteAllUser);
	
	router
	.route("/user/:id")
	.get(AuthanticateMiddleware, userControl.default.GeteUser)
	.put(AuthanticateMiddleware, userControl.default.UpdateUser)
	.delete(AuthanticateMiddleware, userControl.default.DeleteUser);

	
router.post("/login",userControl.default.AuthanticateUser);

export default router;
