var express = require("express");
var router = express.Router();
var dao = require("../services/dao");
/* GET home page (Latest movies). */
router.get("/", async function (req, res, next) {
  res.send(await dao.searchMovie(req.query.query, req.query.page));
});

module.exports = router;
