import express, { Express } from "express";
import { PORTNUMBER } from "./constant";
import dbConnection from "./services/Database";
import App from "./services/ExpressApp";

(async () => {
  const app: Express = express();

  await App(app);

  await dbConnection();

  app.listen(PORTNUMBER, () => {
    console.clear();
    console.log(`server is listening to port ${PORTNUMBER}`);
  });
})();