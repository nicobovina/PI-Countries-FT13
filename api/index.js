const server = require('./server.js');
const { api } = require('./config.js');
const { conn } = require('./db.js');
const apiCall = require('./apiCall.js');

const HOST = api.host;
const PORT = api.port;

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  server.listen(PORT, HOST, async () => {
  // Hacemos el pedido de los paises a la API y los guardamos en la BD.
  try {
      apiCall();
      console.log(`Server is listening at ${PORT}`); // eslint-disable-line no-console
  } catch(err){
      console.error('SE ORIGINO EL SIGUIENTE ERROR AL INICIAR EL SERVIDOR: \n\n',err);
  }
  });
});
