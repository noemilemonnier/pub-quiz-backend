module.exports = mongoose => {
    const Question = mongoose.model(
      "question",
      mongoose.Schema(
        {
          question: String,
          options: [{type: String}],
          answer: String
        }
      )
    );
  
    return Question;
  };