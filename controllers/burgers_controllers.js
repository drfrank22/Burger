const express = require("express");
var router = express.Router();
const burger = require("../models/burger");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne([
        "burger_name"
    ], [
        req.body.burger_name
    ], function(result) {
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne({
      //because burger is not flipping between devoured and not it is hard coded
      devoured: 1
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;