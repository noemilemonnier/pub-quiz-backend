const db = require("../models");
const Team = db.team;

// Create and Save a new team
exports.create = (req, res) => {
  
};

// Retrieve all teams from the database.
exports.findAll = (req, res) => {
  
};

// Find a single team with an id
exports.findOne = (req, res) => {
  
};

// Update a team by the id in the request
exports.update = (req, res) => {
  
};

// Delete a team with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all teams from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published teams
exports.findAllPublished = (req, res) => {
  
};

//To create
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a team
    const team = new Team({
      name: req.body.name,
      teamMembers: req.body.teamMembers,
      score: req.body.score
    });
  
    // Save team in the database
    team
      .save(team)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Team."
        });
      });
  };

  //Retrieve all teams/ find by team name from the database:
  exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  
    Team.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving teams."
        });
      });
  };

  //Find a single team with an id:
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Team.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Team with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Team with id=" + id });
      });
  };

  //update a team identified by the id in the request:
  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Team.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Team with id=${id}. Maybe Team was not found!`
          });
        } else res.send({ message: "Team was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Team with id=" + id
        });
      });
  };

  //Delete a Team with the specified id:
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Team.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Team with id=${id}. Maybe Team was not found!`
          });
        } else {
          res.send({
            message: "Team was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Team with id=" + id
        });
      });
  };

  //delete all teams from DB
  exports.deleteAll = (req, res) => {
    Team.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Teams were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all teams."
        });
      });
  };
