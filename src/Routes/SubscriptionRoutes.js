import { Router } from "express";
import SubscriptionControllers from "../Controllers/SubscriptionControllers";
import SubscrValidation from "../Middlewares/Validation/Subscription";
import { checkAuthToken } from "../Middlewares/CheckAuthToken";
import { checkAdmin } from "../Middlewares/CheckAdmin";

const router = Router();
const { addSubscr, getSubscr, deleteSubscr } = SubscriptionControllers;
const { subscrFormValidation } = SubscrValidation;

router.post("/add", subscrFormValidation, addSubscr);

router.get("/", [checkAuthToken, checkAdmin], getSubscr);

router.delete("/:id", deleteSubscr);

export default router;
