module.exports = app => {
    const teams = require("../controllers/team.controller.js");
  
    var router = require("express").Router();
  
    // Create a new team
    router.post("/", teams.create);
  
    // Retrieve all teams
    router.get("/", teams.findAll);
  
    // Retrieve all published teams
    router.get("/published", teams.findAllPublished);
  
    // Retrieve a single team with id
    router.get("/:id", teams.findOne);
  
    // Update a team with id
    router.put("/:id", teams.update);
  
    // Delete a team with id
    router.delete("/:id", teams.delete);
  
    // Create a new team
    router.delete("/", teams.deleteAll);
  
    app.use('/api/teams', router);
  };