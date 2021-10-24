var express = require("express");
var router = express.Router();
var dao = require("../services/dao");
/* GET home page (Latest movies). */
router.get("/:id", async function (req, res, next) {
  console.log(req.params.id);
  res.send(await dao.movieDetail(req.params.id));
});

module.exports = router;
