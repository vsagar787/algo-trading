import { Application, Request, Response } from 'express';
import { AlertsController } from '../controllers/alertsController';

export class AlertsRoutes {

    private alertsController: AlertsController = new AlertsController();

    public route(app: Application) {
        
        app.post('/api/alerts', (req: Request, res: Response) => {
            //this.user_controller.create_user(req, res);
            this.alertsController.getAlerts(req, res);

        });

        // app.get('/api/user/:id', (req: Request, res: Response) => {
        //     this.user_controller.get_user(req, res);
        // });

        // app.put('/api/user/:id', (req: Request, res: Response) => {
        //     this.user_controller.update_user(req, res);
        // });

        // app.delete('/api/user/:id', (req: Request, res: Response) => {
        //     this.user_controller.delete_user(req, res);
        // });

    }
}