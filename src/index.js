// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign
const { port, env } = require('./config/vars');
const logger = require('./config/logger');
const app = require('./config/express');
const mongoose = require('./config/mongoose');

// open mongoose connection
mongoose.connect();

// listen to requests
// app.listen(port, () => logger.info(`api server started on port ${port} (${env})`));
const server = app.listen(port, async() => {
//   await sequelize.sync({force: false});
//   console.log(" App is running at http://localhost:%d in %s mode",
//     app.get("port"),
//     app.get("env")
//   );
  console.log(`api server started on port ${port} (${env})`);
});
/**
* Exports express
* @public
*/
module.exports = server;
