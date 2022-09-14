import { Router } from "express";
import * as control from "../../controllers/products.controllers";

const router = Router();

router
	.route("/product")
	.post(control.default.CreatProduct)
	.get(control.default.GetAllProducts)
	.delete(control.default.DeleteAllProducts);

router
	.route("/product/:id")
	.delete(control.default.DeleteSpecificProduct)
	.get(control.default.GetSpecificProduct)
	.put(control.default.UpdateSpecificProducts);
router.get("/product/sort/:category", control.default.SortProducts);


export default router;
