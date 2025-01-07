import * as homepageMW from './middleware';
import * as homepageCtrl from './controller';
import { Router } from 'express';
import { API } from '..';

export default class HomepageApi implements API {
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  setupApi() {
    this.router.get('/', homepageMW.canGet, homepageCtrl.get);
  }
}