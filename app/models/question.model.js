/*
* This page is to clearly state what does Question contains
* author: @noemilemonnier
*/

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