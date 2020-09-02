/*
* This page is to clearly state what does Team contains
* author: @noemilemonnier
*/

module.exports = mongoose => {
    const Team = mongoose.model(
      "team",
      mongoose.Schema(
        {
          name: String,
          teamMembers: String,
          score: Number,
          isLogIn: Boolean
        }
      )
    );
  
    return Team;
  };