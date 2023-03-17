import * as mongoose from 'mongoose';
import { ModificationNote } from '../common/model';

const Schema = mongoose.Schema;

const schema = new Schema({
    indicator:String,
    exchange:String,
    ticker: String,
    price: String,
    time: String,
    alertType: String,
    volume:Number,
    interval:Number,
    modification_notes: [ModificationNote]
});

export default mongoose.model('alerts', schema);