import morgan from "morgan";

import app from "./src/app";

import routerUser from "./src/routes/user.routes";
import { globalesMiddleware } from "./src/middleware/global";
import { ErrorMDW } from "./src/middleware/error";

const port = process.env.PORT ?? 3000;

const main = () => {
  // configurar los MDW
  app.use(morgan("dev"));

}
main();