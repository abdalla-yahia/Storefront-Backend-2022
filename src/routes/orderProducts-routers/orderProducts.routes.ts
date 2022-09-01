import { Router} from "express";
import * as orpro from '../../controllers/orderProducts.controllers';


const router = Router();

router.route("/orpro").post(orpro.CreateOrderProducts).get(orpro.GetAllOrderProducts).delete(orpro.DeleteAllOrderProducts);
router.route('/orpro/op').get(orpro.GetOrderProducts)

export default router;