module.exports = app => {
  const { verifySignUp } = require("../middleware");
  const users = require("../controllers/user.controller");
  var router = require("express").Router();
  
     // Retrieve all users
     //in postman : GET + http://localhost:8080/auth/
    router.get("/", users.getAllUsers);

    // Delete all users
    //in postman : DELETE + http://localhost:8080/auth/
    router.delete("/", users.deleteAll);

    // Log In for current user
    //in postman : POST + http://localhost:8080/auth/signin/
    router.post("/signin", users.signin);
  
    //  Create a new user 
    //in postman : POST + http://localhost:8080/auth/signup/
    router.post("/signup", users.signup);

    //Find one User by username
     //in postman : GET + http://localhost:8080/auth/user/{username}
    router.get("/user/:username", users.findByUsername);

    // Update User with username
   //in postman : PUT + http://localhost:8080/auth/update/{username}
   router.put("/update/:username", users.updateByUsername);

   // Delete a single user with username
  //in postman : DELETE + http://localhost:8080/auth/delete/{name}
  router.delete("/delete/:username", users.deleteByUsername);


  

  
    app.use('/auth', router);
  };