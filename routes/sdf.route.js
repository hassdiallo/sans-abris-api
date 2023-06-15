const express = require("express")

const router = express.Router()

const sdfController = require("../controllers/sdf.controller")

router.get("/sdf", sdfController.getSdf)
router.post("/create-sdf", sdfController.addSdf)
router.put("/uptade-sdf/:id", sdfController.updateSdf)
router.put("/delete-sdf/:id", sdfController.deleteSdf)

module.exports = router