/*
* This page is to set all the methods for the Teams of the quiz
* author: @noemilemonnier
*/


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

// Find a single team with an id
exports.findByName = (req, res) => {
  
};

// Update a team by the id in the request
exports.update = (req, res) => {
  
};

// Update a team by the name in the request
exports.updateByName = (req, res) => {
  
};

// Delete a team with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all teams from the database.
exports.deleteAll = (req, res) => {
  
};


//To create
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    console.log("Creating Team - Team name: " + req.body.name + " Team members: " + req.body.teamMembers + " Team score: " + req.body.score)+ " isLogIn: " + req.body.isLogIn;

    // Create a team
    const team = new Team({
      name: req.body.name,
      teamMembers: req.body.teamMembers,
      score: 0,
      isLogIn: false
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

  //Retrieve all teams from the database:
  exports.getAllTeams = async (req, res) => {
   await Team.find()
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

//Find a single team with an name:
exports.findByName = (req, res) => {
  const teamName = req.params.name;
  Team.find({"name": teamName})
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

  //update a team identified by the name in the request:
  exports.updateByName = (req, res) => {
    const body = req.body;
    const teamName = req.params.name;

    console.log("Request Body :" + body.name + " Members:" + body.teamMembers + " Score:" + body.score)
    
    Team.findOne({"name": teamName}, (err, team) => {
      if (err) {
            return res.status(404).json({
              err,
              message: 'Team not found!',
            })
        }
      team.name = body.name
      team.teamMembers = body.teamMembers
      team
        .save()
        .then((data) => {
            return res.status(200).json({
              success: true,
              name: team.name,
              teamMembers: team.teamMembers,
              message: "Team was updated successfully.",
            })
          })
        .catch(error => {
          return res.status(404).json({
            error,
            message: 'Team not updated!',
          })
        })
    })
}

//update a team identified by the name in the request:
exports.isLoggedIn = (req, res) => {

  const teamName = req.params.name;

  Team.findOne({"name": teamName}, { useFindAndModify: false }, (err, team) => {
    console.log(" team trying to log in: " + team.name + " from selected team name: " + teamName + " and is Logged in? " + team.isLogIn);

    if (err) {
          return res.status(404).json({
            err,
            message: 'Team not found!',
          })
    }

    else{
      // If Team is already logged in
      if ( team.isLogIn === true){
      console.log("Team  " + team.name + " is already logged.");
        return  res.status(404).json({
            success: false,
            isLogIn: true,
            message: "Team is already logged.",
        })
      }

      //Logging the team in
      team.isLogIn = true;
      console.log(" team trying to log in: " + team.name + " and is Logged in? " + team.isLogIn);

      team
        .save()
        .then((data) => {
            return res.status(200).json({
            success: true,
            isLogIn: true,
            message: "Team was logged in successfully.",
          })
        })
      .catch(error => {
        return res.status(404).json({
          error,
          message: "Team was not logged in successfully.",
        })
      })
    }

    
    }
   )
}



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

  //Delete a Team with the specified Name:
  exports.deleteByName = (req, res) => {
    const teamName = req.params.name;
  
    Team.deleteOne({"name": teamName})
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Team with name=${teamName}. Maybe Team was not found!`
          });
        } else {
          res.send({
            message: "Team was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Team with name=" + teamName
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
