import { ModificationNote } from "../common/model";

export interface IAlerts {
    _id?: String;
    exchange:String,
    ticker: String,
    price: String,
    time: String,
    alertType: String,
    modification_notes: ModificationNote[]
}