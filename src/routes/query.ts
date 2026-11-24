import { Router } from "express";
import { askQuery } from "../controllers/query.js";

const queryRouter = Router();
queryRouter.post('/', askQuery);
export { queryRouter };