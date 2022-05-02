import { Router } from 'express';
import { hocSinhController, quanlyController } from '../controllers';

const router = Router();

router
  .route('/dshs/:idGv')
  .get(hocSinhController.getDsHs)

router
  .route('/mail')
  .post(quanlyController.sendMail)

export default router;

