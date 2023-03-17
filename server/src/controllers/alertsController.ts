import { Request, Response } from 'express';
import { insufficientParameters, mongoError, successResponse, failureResponse } from '../modules/common/service';
import { IAlerts } from 'modules/alerts/model';
import  AlertsService  from '../modules/alerts/service'
import { Validations } from '../modules/common/validations';



export class AlertsController {

    private alertsService: AlertsService = new AlertsService();
    private validations: Validations = new Validations();

    getAlerts(req: Request, res: Response) {

    //     exchange:String,
    // ticker: String,
    // price: String,
    // time: String,
    // alertType: String,

        try {   

            this.validations.getAlertsValidation(req,res);

            const alertCols: IAlerts = {
                indicator:req.body.indicator,
                exchange:req.body.exchange,
                ticker:req.body.ticker,
                price:req.body.price,
                time:req.body.time,
                alertType:req.body.alertType,
                volume:req.body.volume,
                interval:req.body.interval,
                modification_notes: [{
                    modified_on: new Date(Date.now()),
                    modified_by: null,
                    modification_note: 'New alert created'
                }]
            };

            const where = { ticker: req.body.ticker };
            this.alertsService._where(where, (err: any, dbCols: IAlerts) => {
                if (err) {
                    mongoError(err, res);
                } else if (dbCols) {

                    this.alertsService._update(alertCols, where, (err: any) => {
                        if (err) {
                            mongoError(err, res);
                        } else {
                            successResponse('update successfull', alertCols, res);
                        }
                    });

                } else {
                    this.alertsService._create(alertCols, (err: any, data: IAlerts) => {
                        if (err) {
                            mongoError(err, res);
                        } else {
                            successResponse('create successfull', data, res);
                        }
                    });
                }
            });


        } catch (error) {

            insufficientParameters(error);
        }
    }

}