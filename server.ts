import app from './app';
import { connectDatabase } from './src/config/database.config';
import { get } from './src/config/env.config';
import { MESSAGES } from './src/utils/messages';

const PORT = get('PORT');

(async () => {
    try {
        await connectDatabase();
        app.listen(PORT, () => {
            console.log(`${MESSAGES.LOG_MESSAGES.SERVER_RUNNING + PORT}`);
        });
    } catch (error) {
        console.error(MESSAGES.ERROR.FAILED_TO_START_SERVER, error);
    }
})();
