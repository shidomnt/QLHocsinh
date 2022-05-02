import { Request, Response } from 'express';

interface Controller {
  (req: Request, res: Response): Promise<any>;
}

export * as hocSinhController from './hocSinh';
export * as quanlyController from './quanly';

export type { Controller };
