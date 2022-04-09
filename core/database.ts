import mongoose from 'mongoose';
import GLOBAL_CONFIG from '../config/config';
import TO from '../utils/promise';

class Database {
    mongoose: mongoose.Mongoose;

    constructor() {
        this.mongoose = mongoose;
    }

    async setup() {
        const URL = GLOBAL_CONFIG.DATABASE.URL;

        const [err, mongooseInstance] = await TO(mongoose.connect(URL, {}));

        if (err) {
            console.log(`Failed to connect MongoDB: ${err.message}`);
            return;
        }

        console.log(`Connected to mongo db ${URL.split('/')[3]}`);

        this.mongoose = mongooseInstance;

        this.mongoose.connection.on('error', err => console.log(`Database error: ${err.message}`));
        this.mongoose.connection.on('disconnected', () => console.log('Database disconnected!'));
        this.mongoose.connection.on('reconnect', () => console.log(`Database reconnected`));
    }
}

const db = new Database();

export default db;
