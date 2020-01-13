import { NextFunction, Request, Response } from 'express';

type Handler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void> | void;

export class Route {
  public path: string;
  public method: 'get' | 'post' | 'put' | 'delete';
  public handler: Handler | Handler[];
  constructor(
    path: string,
    method: 'get' | 'post' | 'put' | 'delete',
    handler: Handler | Handler[]
  ) {
    this.path = path;
    this.method = method;
    this.handler = handler;
  }
}
