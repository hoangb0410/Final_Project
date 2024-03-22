const HistoricalSiteController = require("../controllers/HistoricalSiteController");

const router = require("express").Router();

router.post("/createSite", HistoricalSiteController.createHistoricalSite);

module.exports = router;
