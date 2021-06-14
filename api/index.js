//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Country, Activity } = require('./src/db.js');

const axios = require("axios").default;

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  server.listen(3001, async () => {
  // Hacemos el pedido de los paises a la API y los guardamos en la BD.
  const response = await axios.get('https://restcountries.eu/rest/v2/all');
  response.data.forEach( (country) => {
        const { alpha3Code: id, name, flag, region: continent, capital, subregion, area, population } = country;
          const countryCreated = Country.create({
            id, name, flag, continent, capital, subregion, area, population
          });
        });

    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});



