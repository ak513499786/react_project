import express from "express";

import {
  addWebInfo,
  // updateWebInfo,
  // remove,
  sendMailContact,
  sendMailCareer,
  Logout,
  getweb,
  Login,
} from "../ctrl/controller.js";

const router = express.Router();
router.get("/", getweb);
router.post("/add", addWebInfo);

router.post("/login", Login);
router.post("/send_mail", sendMailContact);
router.post("/send_mail_career", sendMailCareer);

router.get("/logout", Logout);
// router.put("/update/:id", updateWebInfo);
// router.delete("/dele/:id", remove);

export default router;
