import { Router } from "express";
import * as control from "../../controllers/products.controllers";
import AuthanticateMiddleware from "../../middlewares/Auth.midlwares";

const router = Router();

router
	.route("/product")
	.post(AuthanticateMiddleware, control.CreatProduct)
	.get(AuthanticateMiddleware, control.GetAllProducts)
	.put(AuthanticateMiddleware, control.UpdateSpecificProducts)
	.delete(AuthanticateMiddleware, control.DeleteAllProducts);

router
	.route("/product/:id")
	.delete(AuthanticateMiddleware, control.DeleteSpecificProduct)
	.get(AuthanticateMiddleware, control.GetSpecificProduct);

router.get("/sort", AuthanticateMiddleware, control.SortProducts);


export default router;
