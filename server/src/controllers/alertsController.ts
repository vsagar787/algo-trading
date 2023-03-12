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
                exchange:req.body.exchange,
                ticker:req.body.ticker,
                price:req.body.price,
                time:req.body.time,
                alertType:req.body.alertType,
                modification_notes: [{
                    modified_on: new Date(Date.now()),
                    modified_by: null,
                    modification_note: 'New alert created'
                }]
            };
            this.alertsService.createAlerts(alertCols, (err: any, data: IAlerts) => {
                if (err) {
                    mongoError(err, res);
                } else {
                    successResponse('create alert successfull', data, res);
                }
            });

        } catch (error) {

            insufficientParameters(error);
        }


    
    }

    // getAlertsValidation(req) {

    //     return true;
    // }

    // public create_user(req: Request, res: Response) {
    //     // this check whether all the filds were send through the erquest or not
    //     if (req.body.name && req.body.name.first_name && req.body.name.middle_name && req.body.name.last_name &&
    //         req.body.email &&
    //         req.body.phone_number &&
    //         req.body.gender) {
    //         const user_params: IUser = {
    //             name: {
    //                 first_name: req.body.name.first_name,
    //                 middle_name: req.body.name.middle_name,
    //                 last_name: req.body.name.last_name
    //             },
    //             email: req.body.email,
    //             phone_number: req.body.phone_number,
    //             gender: req.body.gender,
    //             modification_notes: [{
    //                 modified_on: new Date(Date.now()),
    //                 modified_by: null,
    //                 modification_note: 'New user created'
    //             }]
    //         };
    //         this.user_service.createUser(user_params, (err: any, user_data: IUser) => {
    //             if (err) {
    //                 mongoError(err, res);
    //             } else {
    //                 successResponse('create user successfull', user_data, res);
    //             }
    //         });
    //     } else {
    //         // error response if some fields are missing in request body
    //         insufficientParameters(res);
    //     }
    //}

}