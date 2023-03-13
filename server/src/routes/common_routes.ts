import { Application, Request, Response } from 'express';

export class CommonRoutes {
    public route(app: Application) {

        app.get('/api/test', function (req: Request, res: Response) {
            res.status(200).send({ error: false, message: 'API is working...' });
        });

        // Mismatch URL
        app.all('*', function (req: Request, res: Response) {
            res.status(404).send({ error: true, message: 'Check your URL please' });
        });

    }
}
