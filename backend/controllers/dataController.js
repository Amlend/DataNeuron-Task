const express = require("express");
const Data = require("../models/DataSchema.js");
const dataHelper = require("../Helpers/dataHelper.js");

const { incrementCount, getCount } = dataHelper;

exports.addData = async (req, res) => {
  try {
    // Clear existing data
    await Data.deleteMany();
    incrementCount();
    // Add new data
    const newData = new Data(req.body);
    await newData.save();

    res.json({ message: "Data added successfully", text: req.body.text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateData = async (req, res) => {
  try {
    // Update existing data
    const newData = req.body;
    await Data.deleteMany();
    const updatedData = new Data(newData);
    await updatedData.save();
    incrementCount();
    res.json({ message: "Data updated successfully", text: req.body.text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
