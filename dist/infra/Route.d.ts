import { NextFunction, Request, Response } from 'express';
declare type Handler = (req: Request, res: Response, next: NextFunction) => Promise<void> | void;
export declare class Route {
    path: string;
    method: 'get' | 'post' | 'put' | 'delete';
    handler: Handler | Handler[];
    constructor(path: string, method: 'get' | 'post' | 'put' | 'delete', handler: Handler | Handler[]);
}
export {};
