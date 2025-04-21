const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// Create
router.post('/students', async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.send(student);
});

// Read All
router.get('/students', async (req, res) => {
  const students = await Student.find();
  res.send(students);
});

// Read One
router.get('/students/:id', async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.send(student);
});

// Update
router.put('/students/:id', async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(student);
});

// Delete
router.delete('/students/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.send({ message: 'Student deleted successfully' });
});

module.exports = router;
