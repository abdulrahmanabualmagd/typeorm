import { Router } from "express";
import * as profileController from "./profile.controller";

const router = Router();

router.get("/", profileController.getAllProfiles);
router.get("/:id", profileController.getProfileById);
router.post("/", profileController.createProfile);
router.put("/:id", profileController.updateProfile);
router.delete("/:id", profileController.deleteProfile);

export default router;
