import { getRoutes } from './routes/routes';
import { Route } from './infra/Route';

export default class API {
  constructor() {}

  public start() {
    return;
  }

  public routes(): Route[] {
    return getRoutes();
  }
}
