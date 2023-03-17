import { IAlerts } from './model';
import alerts from './schema';

export default class AlertsService {

    public _create(cols:IAlerts, callback:any) {
        const alert = new alerts(cols);
        alert.save(callback);
    }

    public _where(query: any, callback: any) {
        alerts.findOne(query, callback);
    }

    public _update(cols: IAlerts, query:any, callback: any) {
        alerts.findOneAndUpdate(query, cols, callback);
    }
    
    public _delete(_id: String, callback: any) {
        const query = { _id: _id };
        alerts.deleteOne(query, callback);
    }

}