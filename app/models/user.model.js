
module.exports = mongoose => {
    const User = mongoose.model(
      "user",
      mongoose.Schema({
            username: String,
            password: String,
            roles: [
                {
                  type: String
                }
            ],
            createdAt: {
                type: Date,
                default: Date.now()
            }
        })
    );
  
    return User;
};