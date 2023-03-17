import { Request, Response } from 'express';
import  CronService  from '../modules/cron/service'
import alerts from '../modules/alerts/schema';

export class CronController {

    private cronService: CronService = new CronService();
 
    getAlerts() {
        console.log('Alert Controller..');
        let where = {}
        let allAlerts = this.cronService._where(where,alerts);

        

        //console.log(allAlerts);
    }
}