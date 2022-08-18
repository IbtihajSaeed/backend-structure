import express from "express";
import exampleCtrl from "../controller/example.controller.js";
const router = express.Router();

router
  .get("/",exampleCtrl.getExample);

export default router;
