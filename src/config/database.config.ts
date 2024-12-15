import mongoose from 'mongoose';
import { get } from './env.config';
import Logger from './winston';

export const connectDatabase = async () => {
    try {
        const dbUri = get('DB_URI');
        await mongoose.connect(dbUri);
        Logger.info('Database connected successfully')
    } catch (error) {
        Logger.info('Database connected failed', error)
        process.exit(1);
    }
};
