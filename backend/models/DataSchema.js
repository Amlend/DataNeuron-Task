const express = require("express");
const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  text: String,
});

module.exports = mongoose.model("Data", dataSchema);
