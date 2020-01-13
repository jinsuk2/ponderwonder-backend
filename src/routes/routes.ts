import { Route } from '../infra/Route';
import { NextFunction, Response, Request } from 'express';

export const getRoutes = () => {
  return [
    new Route('/api/v1/users', 'get', [
      async (req: Request, res: Response) => {
        try {
        } catch (e) {}
      }
    ])
  ];
};
