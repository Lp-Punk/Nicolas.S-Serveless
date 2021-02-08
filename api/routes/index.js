const express   = require("express");
const router    = express.Router();
const Meals     = require("../models/Meals");
const Orders    = require("../models/Orders");

module.exports = function () {


  router.get("/", (req, res) => {
    res.send("Soy la Raiz");
  });

  router.get("/api/meals", (req, res) => {
    Meals.find().exec().then((x) => res.status(200).send(x));
  });
  router.get("/api/meals/:id", (req, res) => {
    Meals.findById(req.params.id).exec.then((x) => res.status(200).send(x));
  });
  router.post("/api/meals/", (req, res) => {
    Meals.create(req.body).then((x) => res.status(201).send(x));
  });
  router.put("/api/meals/:id", (req, res) => {
    Meals.findByIdAndUpdate(req.params.id, req.body).then(() =>
      res.sendStatus(204)
    );
  });
  router.delete("/api/meals/:id", (req, res) => {
    Meals.findByIdAndDelete(req.params.id)
      .exec()
      .then(() => res.sendStatus(204));
  });

 
  router.get("/api/orders", (req, res) => {
    Orders.find()
      .exec()
      .then((x) => res.status(200).send(x));
  });
  router.get("/api/orders/:id", (req, res) => {
    Orders.findById(req.params.id).exec.then((x) => res.status(200).send(x));
  });
  router.post("/api/orders/", (req, res) => {
    Orders.create(req.body).then((x) => res.status(201).send(x));
  });
  router.put("/api/orders/:id", (req, res) => {
    Orders.findByIdAndUpdate(req.params.id, req.body).then(() =>
      res.sendStatus(204)
    );
  });
  router.delete("/api/orders/:id", (req, res) => {
    Orders.findByIdAndDelete(req.params.id)
      .exec()
      .then(() => res.sendStatus(204));
  });

  return router;
};
