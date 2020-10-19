import { Router } from "express";
import QueryControllers from "../Controllers/QueryControllers";
import QueryValidation from "../Middlewares/Validation/Query";

const router = Router();

router.get("/", QueryControllers.getAllQueries);

router.get("/:id", QueryControllers.getQuery);

router.post(
  "/add",
  QueryValidation.queryFormValidation,
  QueryControllers.addQuery
);

export default router;
