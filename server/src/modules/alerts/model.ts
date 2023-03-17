import { ModificationNote } from "../common/model";

export interface IAlerts {
    _id?: String;
    indicator:String;
    exchange:String,
    ticker: String,
    price: String,
    time: String,
    alertType: String,
    volume:Number,
    interval:Number,
    modification_notes: ModificationNote[]
}