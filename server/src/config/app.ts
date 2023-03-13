import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from 'mongoose';
import environment from "../environment";
import { TestRoutes } from "../routes/user_routes";
import { CommonRoutes } from "../routes/common_routes";
import { AlertsRoutes } from "../routes/alerts_routes";

class App {

   public app: express.Application;
   public mongoUrl: string = 'mongodb+srv://vsagar787:HCFCEGZUiVDeVaWr@cluster0.drnl4n0.mongodb.net/' + environment.getDBName();

   //private test_routes: TestRoutes = new TestRoutes();
   private common_routes: CommonRoutes = new CommonRoutes();
   private alertsRoutes: AlertsRoutes = new AlertsRoutes();

   constructor() {
      this.app = express();
      this.config();
      this.mongoSetup();
      //this.test_routes.route(this.app);
      this.common_routes.route(this.app);
      this.alertsRoutes.route(this.app);
   }

   private config(): void {
      // support application/json type post data
      this.app.use(bodyParser.json());
      //support application/x-www-form-urlencoded post data
      this.app.use(bodyParser.urlencoded({ extended: false }));
   }

   private mongoSetup(): void {
      mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
   }

}
export default new App().app;