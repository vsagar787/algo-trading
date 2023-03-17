import app from "./config/app";
import env from './environment'
var cron = require('node-cron');
import { CronController } from "../src/controllers/cronController";
const cronController: CronController = new CronController();

const PORT = env.getPort();

app.listen(PORT, () => {
   console.log('Express server listening on port ' + PORT);
});


//CRON
let getAlerts = () => {
   cronController.getAlerts();
   //console.log("running a task every 10 second");
}

cron.schedule("*/30 * * * * *", getAlerts);