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
  addWebInfoAbout,
  getwebHomeAbout,
  addWebInfoServices,
  getwebHomeservices,
  addWebInfoAboutHero,
  getWebAboutHero,
  addWebInfoAboutvision,
  getWebAboutVision,
  getWebAboutGuiding,
  addWebInfoAboutguiding,
  addWebInfoAboutTestimonial,
  getWebAbouttest,
  getWebAboutcrew,
  addWebInfoAboutcrew,
  addWebInfoAboutcrew_box,
  getWebAboutcrew_box,
} from "../ctrl/controller.js";

const router = express.Router();


router.get("/", getweb);
router.get("/homeAbout", getwebHomeAbout);
router.get("/homeServices", getwebHomeservices);
router.get("/aboutHero", getWebAboutHero);
router.get("/aboutvision", getWebAboutVision);
router.get("/aboutguiding", getWebAboutGuiding);
router.get("/abouttest", getWebAbouttest);
router.get("/aboutcrew", getWebAboutcrew);
router.get("/aboutcrew_box", getWebAboutcrew_box);


router.post("/add", addWebInfo);
router.post("/addAbout", addWebInfoAbout);
router.post("/addServices", addWebInfoServices);
router.post("/addaboutHero", addWebInfoAboutHero);
router.post("/addaboutvision", addWebInfoAboutvision);
router.post("/addaboutguiding", addWebInfoAboutguiding);
router.post("/addabouttest", addWebInfoAboutTestimonial);
router.post("/addaboutcrew", addWebInfoAboutcrew);
router.post("/addaboutcrew_box", addWebInfoAboutcrew_box);

router.post("/login", Login);
router.post("/send_mail", sendMailContact);
router.post("/send_mail_career", sendMailCareer);

router.get("/logout", Logout);
// router.put("/update/:id", updateWebInfo);
// router.delete("/dele/:id", remove);

export default router;
