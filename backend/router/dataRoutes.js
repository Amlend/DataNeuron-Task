// routes/dataRoutes.js
const express = require("express");
const dataController = require("../controllers/dataController.js");
const dataHelper = require("../Helpers/dataHelper.js");

const { addData, updateData } = dataController;
const getCount = dataHelper.getCount;

const router = express.Router();

router.post("/add", addData);

router.put("/update", updateData);

router.get("/count", async (req, res) => {
  const data = await getCount();
  res.json({ count: data });
});

module.exports = router;
