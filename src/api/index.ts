import ExampleApi from './exemple';
import HomepageApi from './home';

import { Router, Express } from 'express';

export const setupApis = (application: Express) => {
  const router = Router();
  const exampleApi = new ExampleApi(router);
  const homepageApi = new HomepageApi(router);

  exampleApi.setupApi();
  homepageApi.setupApi();

  application.use('/api', router);
};

export interface API {
  setupApi(): void;
}