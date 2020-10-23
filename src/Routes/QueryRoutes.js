import { Router } from "express";
import QueryControllers from "../Controllers/QueryControllers";
import { checkAdmin } from "../Middlewares/CheckAdmin";
import { checkAuthToken } from "../Middlewares/CheckAuthToken";
import QueryValidation from "../Middlewares/Validation/Query";

const router = Router();
const { addQuery, getAllQueries, getQuery, deleteQuery } = QueryControllers;
const { queryFormValidation } = QueryValidation;

router.post("/add", queryFormValidation, addQuery);

router.get("/", checkAuthToken, checkAdmin, getAllQueries);

router.get("/:id", checkAuthToken, checkAdmin, getQuery);

router.delete("/:id", checkAuthToken, checkAdmin, deleteQuery);

export default router;
