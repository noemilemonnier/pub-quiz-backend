/*
* This page is to state all the possible routes for the Team
* author: @noemilemonnier
*/


module.exports = app => {
  const teams = require("../controllers/team.controller.js");

  var router = require("express").Router();

  // Retrieve all teams
  //in postman : GET + http://localhost:8080/teams
  router.get("/", teams.getAllTeams);

  //Create a team
  //in postman : POST + http://localhost:8080/teams
  router.post("/", teams.create);

  /**
   * with ID as PARAM
   */
  // Retrieve a single team with id
  //in postman : GET + http://localhost:8080/teams/id/{id}
  router.get("/id/:id", teams.findOne);
  
  // Update a team with id
  //in postman : PUT + http://localhost:8080/teams/id/{id}
  router.put("/id/:id", teams.update);

  // Delete a team with id
  //in postman : DELETE + http://localhost:8080/teams/id/{id}
  router.delete("/id/:id", teams.delete);

  /**
   * with NAME as PARAM
   */

  // Retrieve a single team with name
  //in postman : GET + http://localhost:8080/teams/name/{name}
  router.get("/name/:name", teams.findByName);

   // Update a team with name
   //in postman : PUT + http://localhost:8080/teams/update/{name}
   router.put("/update/:name", teams.updateByName);

   //Update team that is loged in
   //in postman : PUT + http://localhost:8080/teams/login/{name}
   router.put("/login/:name", teams.isLoggedIn);


  // Delete a single team with name
  //in postman : DELETE + http://localhost:8080/teams/delete/{name}
  router.delete("/delete/:name", teams.deleteByName);


  // Remove all teams
  //in postman : DELETE + http://localhost:8080/teams
  router.delete("/", teams.deleteAll);

  app.use('/teams', router);
};