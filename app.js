// CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

import express from 'express';

// const express = require('express');

const app = express();

const port = 8005;

app.use(express.json());

// TODO: add port in env file 
app.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});



