import { Router } from "express";

import { cepRoutes } from "./cep.routes";

const routes = Router();

routes.use("/cep", cepRoutes);

export { routes };
