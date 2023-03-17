
export default class CronService {

    public _where(query: any,model:any) {
        return model.find(query);
    }

   
}