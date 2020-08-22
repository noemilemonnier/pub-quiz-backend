module.exports = mongoose => {
    const Team = mongoose.model(
      "team",
      mongoose.Schema(
        {
          name: String,
          teamMembers: String,
          score: Number
        }
      )
    );
  
    return Team;
  };