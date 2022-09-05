import { Router} from "express";
import * as orpro from '../../controllers/orderProducts.controllers';
import AuthanticateMiddleware from "../../middlewares/Auth.midlwares";

const router = Router();

router.route("/orpro")
    .post(AuthanticateMiddleware,orpro.default.CreateOrderProducts)
    .delete(AuthanticateMiddleware,orpro.default.DeleteAllOrderProducts)
    .get(AuthanticateMiddleware,orpro.default.GetAllOrderProducts);
    
router.route('/orpro/:id')
    .get(AuthanticateMiddleware,orpro.default.GetOrderProducts)
    .delete(AuthanticateMiddleware,orpro.default.DeleteOrderProducts)

export default router;