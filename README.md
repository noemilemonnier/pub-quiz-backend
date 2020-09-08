# pub-quiz-test
This is a Node.js Restful CRUD API with Node.js, Express and MongoDB 

Backend coding by following this tutorial: https://bezkoder.com/node-express-mongodb-crud-rest-api/
Backend authentification code done following this tutorial: https://bezkoder.com/node-js-mongodb-auth-jwt/
Frontend coding inspired by these tutorials: 	
https://bezkoder.com/react-node-express-mongodb-mern-stack/	
https://medium.com/swlh/how-to-create-your-first-mern-mongodb-express-js-react-js-and-node-js-stack-7e8b20463e66



HOW TO SET UP:
Open Terminal 
Go to the folder
Write npm install config joi express mongoose jsonwebtoken bcrypt --save
Write "npm start"



API PATHS:	
FOR USERS	
Retrieve all users:       GET + http://localhost:8080/auth/	
Delete all users:         DELETE + http://localhost:8080/auth/	
Log In existing User:     POST + http://localhost:8080/auth/signin/	
                          In the body: username: {username}	
Create User:              POST + http://localhost:8080/auth/signup/ 	
                          In the body: username: {username}	
Find User by username:    GET + http://localhost:8080/auth/user/{username}	
Update User by username:  PUT + http://localhost:8080/auth/update/{username}	
                          In the body: username: {username}	
Delete User by username:  DELETE + http://localhost:8080/auth/delete/{name}	

FOR TEAMS	
Retrieve all teams:   GET + http://localhost:8080/teams	
Delete all teams:     DELETE + http://localhost:8080/teams	
Create Team:          POST + http://localhost:8080/teams	
                      In the body: name: {name}, teamMembers: {listOfNameAsAString}	
Find Team by name:    GET + http://localhost:8080/teams/name/{name}	
Update Team by name:  PUT + http://localhost:8080/teams/update/{name}	
                      In the body: name: {name}, teamMembers: {listOfNameAsAString}	
Delete Team by name:  DELETE + http://localhost:8080/teams/delete/{name}
