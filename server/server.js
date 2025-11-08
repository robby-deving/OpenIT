const app = require('./app');
const dotenv = require('dotenv');
const logger = require('./src/utils/logger.js');


dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});