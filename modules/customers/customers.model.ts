import db from '../../core/database';
import { Document } from 'mongoose';

const schema = new db.mongoose.Schema<{ name: string } & Document>({
    name: {
        type: String,
        required: true,
    },
});

export default db.mongoose.model('Customers', schema);
