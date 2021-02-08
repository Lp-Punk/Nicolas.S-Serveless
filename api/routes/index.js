
module.exports = function () {


 

 
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
