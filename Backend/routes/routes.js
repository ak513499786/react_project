import express from "express";

import {
  addWebInfo,
  // updateWebInfo,
  // remove,
  getweb,
  Login,
} from "../ctrl/controller.js";

const router = express.Router();
router.get("/", getweb);
router.post("/add", addWebInfo);
router.post("/login", Login);
// router.put("/update/:id", updateWebInfo);
// router.delete("/dele/:id", remove);

export default router;
