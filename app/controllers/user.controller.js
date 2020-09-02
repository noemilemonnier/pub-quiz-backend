const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

 //Retrieve all users from the database:
 exports.getAllUsers = async (req, res) => {
  await User.find()
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while retrieving users."
       });
     });
 };

 //Find a single user with an username:
exports.findByUsername = (req, res) => {
  const username = req.params.username;
  User.find({"username": username})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};



//Sign up method -- only need to enter the username
exports.signup = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    console.log("Creating User - Username: " + req.body.username);

    // Create a user
    const user = new User({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.username, 8)
    });
  
    // Save user in the database
    user
      .save(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      });
  };

//user login -- only need to enter the username
  exports.signin = (req, res) => {
    User.findOne({
      username: req.body.username
    })
      .populate("roles", "-__v")
      .exec((err, user) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
  
        if (!user) {
          return res.status(404).send({ message: "User Not found." });
        }
  
        var passwordIsValid = bcrypt.compareSync(
            req.body.username,
            user.password
        );
  
        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!"
          });
        }
  
        var token = jwt.sign({ id: user.id }, config.secret, {
          expiresIn: 86400 // 24 hours
        });
  
        res.status(200).send({
          id: user._id,
          username: user.username,
          accessToken: token
        });
      });
  };

  //update a user identified by the name in the request:
  exports.updateByUsername = (req, res) => {
    const body = req.body;
    const username = req.params.username;

    console.log("Request Body :" + body.username )
    
    User.findOne({"username": username}, (err, user) => {
      if (err) {
            return res.status(404).json({
              err,
              message: 'Username not found!',
            })
        }
        user.username = body.username
        user
        .save()
        .then((data) => {
            return res.status(200).json({
              success: true,
              username: user.username,
              message: "Username was updated successfully.",
            })
          })
        .catch(error => {
          return res.status(404).json({
            error,
            message: 'Username not updated!',
          })
        })
    })
}

//Delete a User with the specified username:
exports.deleteByUsername = (req, res) => {
  const username = req.params.username;

  User.deleteOne({"username": username})
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Username with username=${username}. Maybe Username was not found!`
        });
      } else {
        res.send({
          message: "Username was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with username=" + username
      });
    });
};



//delete all Users from DB
exports.deleteAll = (req, res) => {
  User.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Users were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all users."
      });
    });
};