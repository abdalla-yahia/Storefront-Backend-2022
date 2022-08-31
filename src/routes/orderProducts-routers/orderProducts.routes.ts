import { Router} from "express";
import * as orpro from '../../controllers/orderProducts.controllers';


const router = Router();

router.route("/orpro").post(orpro.CreateOrderProducts).get(orpro.GetAllOrderProducts);
router.route('/orpro/:id').get(orpro.GetOrderProducts)

export default router;