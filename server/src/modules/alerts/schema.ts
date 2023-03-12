import * as mongoose from 'mongoose';
import { ModificationNote } from '../common/model';

const Schema = mongoose.Schema;

const schema = new Schema({
    exchange:String,
    ticker: String,
    price: String,
    time: String,
    alertType: String,
    modification_notes: [ModificationNote]
});

export default mongoose.model('alerts', schema);