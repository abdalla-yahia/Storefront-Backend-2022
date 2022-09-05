import { Router } from "express";
import * as control from "../../controllers/products.controllers";
import AuthanticateMiddleware from "../../middlewares/Auth.midlwares";

const router = Router();

router
	.route("/product")
	.post(AuthanticateMiddleware, control.default.CreatProduct)
	.get(AuthanticateMiddleware, control.default.GetAllProducts)
	.delete(AuthanticateMiddleware, control.default.DeleteAllProducts);

router
	.route("/product/:id")
	.delete(AuthanticateMiddleware, control.default.DeleteSpecificProduct)
	.get(AuthanticateMiddleware, control.default.GetSpecificProduct)
	.put(AuthanticateMiddleware, control.default.UpdateSpecificProducts);
router.get("/product/sort/:category", AuthanticateMiddleware, control.default.SortProducts);


export default router;
