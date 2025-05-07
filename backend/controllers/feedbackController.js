console.log("Loading Feedback model from:", require.resolve('../models/feedback'));//temporary
const Feedback = require(__dirname + '/../models/Feedback');

// Create feedback
exports.createFeedback = async (req, res) => {
  try {
    const newFeedback = new Feedback(req.body);
    await newFeedback.save();
    res.status(201).json(newFeedback);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all feedback
exports.getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get feedback by ID
exports.getFeedbackById = async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);
    if (!feedback) {
      return res.status(404).json({ message: 'Feedback not found' });
    }
    res.status(200).json(feedback);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update feedback
exports.updateFeedback = async (req, res) => {
  try {
    const updatedFeedback = await Feedback.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedFeedback) {
      return res.status(404).json({ message: 'Feedback not found' });
    }
    res.status(200).json(updatedFeedback);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete feedback
exports.deleteFeedback = async (req, res) => {
  try {
    const deletedFeedback = await Feedback.findByIdAndDelete(req.params.id);
    if (!deletedFeedback) {
      return res.status(404).json({ message: 'Feedback not found' });
    }
    res.status(200).json({ message: 'Feedback deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
