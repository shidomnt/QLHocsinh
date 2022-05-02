import { Router } from 'express';
import routerApi from './api';

const router = Router();

router.use('/api', routerApi);

router.use('/', (req, res) => {
  res.send("hello world");
});

export default router;
