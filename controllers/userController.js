const express = require('express');
const User = require('../models/userModel');

exports.getAllUsers = async(req, res) => {
  try{
  const users= await User.find();
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users: users,
    },
  });
}
  catch(err){res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  })
}
}

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};
exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};
exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};
exports.checkPassword=(req,res)=>{
  return User.password===req.body.password;

}
