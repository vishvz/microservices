import getEnv from './config/env.config';
import app from './config/server.config';

(async () => {
  try {
    const port = getEnv('PORT') || 8000;
    app.listen(port, async () => {
      console.log(`Server running at port ${port}`);
    });
  } catch (error) {
    console.log(error.message);
  }
})();
