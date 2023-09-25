import connectDb from './config/database.config';
import getEnv from './config/env.config';
import app from './config/server.config';

(async () => {
  try {
    const port = getEnv('PORT') || 8002;
    await connectDb();
    app.listen(port, async () => {
      console.log(`Server running at port ${port}`);
    });
  } catch (error) {
    console.log(error.message);
  }
})();
