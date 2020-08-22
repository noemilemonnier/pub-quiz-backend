const db = require("../models");
const Question = db.question;

// Create and Save a new question
exports.create = (req, res) => {
  
};

// Retrieve all question from the database.
exports.findAll = (req, res) => {
  
};

// Find a single question with an id
exports.findOne = (req, res) => {
  
};

// Update a question by the id in the request
exports.update = (req, res) => {
  
};

// Delete a question with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all question from the database.
exports.deleteAll = (req, res) => {
  
};


//To create
exports.create = (req, res) => {
    // Validate request
    if (!req.body.question) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a question
    const question = new Question({
      question: req.body.question,
      options: req.body.options,
      answer: req.body.answer
    });
  
    // Save question in the database
    question
      .save(question)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Question."
        });
      });
  };

  //Retrieve all questions/ find by question from the database:
  exports.findAll = (req, res) => {
    const question = req.query.question;
    var condition = question ? { question: { $regex: new RegExp(question), $options: "i" } } : {};
  
    Question.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving questions."
        });
      });
  };

  //Find a single question with an id:
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Question.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found question with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving question with id=" + id });
      });
  };

  //update a question identified by the id in the request:
  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Question.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update question with id=${id}. Maybe question was not found!`
          });
        } else res.send({ message: "question was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating question with id=" + id
        });
      });
  };

  //Delete a question with the specified id:
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Question.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete question with id=${id}. Maybe question was not found!`
          });
        } else {
          res.send({
            message: "Question was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete question with id=" + id
        });
      });
  };

  //delete all question from DB
  exports.deleteAll = (req, res) => {
    Question.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Questions were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all questions."
        });
      });
  };
