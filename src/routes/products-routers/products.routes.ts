import { Router } from "express";
import * as control from "../../controllers/products.controllers";

const router = Router();

router
	.route("/product")
	.post(control.CreatProduct)
	.get(control.GetAllProducts)
	.put(control.UpdateSpecificProducts)
	.delete(control.DeleteAllProducts);

router
	.route("/product/:id")
	.delete(control.DeleteSpecificProduct)
	.get(control.GetSpecificProduct);

router.get('/sort',control.SortProducts)


export default router;
