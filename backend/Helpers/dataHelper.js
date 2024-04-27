const express = require("express");

let count = 0;
exports.incrementCount = () => {
  count++;
};

exports.getCount = () => {
  console.log(count);
  return count;
};
