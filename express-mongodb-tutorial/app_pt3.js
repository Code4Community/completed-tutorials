/**
 * Code for Part 3: Buidling a REST API
 */

const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.get('/school', (req, res) => {
  Schools.find({}, (err, schools) => {
       if (err) {
           return res.send(err);
       } 
       return res.send(schools);
   });
});

app.post('/school', (req, res) => {
  const data = req.body.schoolData;
  Schools.create(data, (err, school) => {
       if (err) {
           return res.send(err);
       } 
       return res.send(school);
   });
});

app.put('/school', (req, res) => {
  Schools.findOneAndUpdate({name: req.body.currentName}, {name: req.body.updatedSchoolName}, (err, school) => {
       if (err) {
           return res.send(err);
       } 
       return res.send(school);
   });
});

app.delete('/school', (req, res) => {
  Schools.findOneAndDelete({name: req.body.schoolName}, (err, school) => {
       if (err) {
           return res.send(err);
       } 
       return res.send(school);
   });
});

const db = () => {
  return mongoose.connect('mongodb+srv://<YOUR_USERNAME_HERE>:<YOUR_PASSWORD_HERE>@<dbname>-hc9j8.azure.mongodb.net/test?retryWrites=true&w=majority), {useNewUrlParser: true, useUnifiedTopology: true}');
};
db().then(async () => {
  app.listen(3000, () => {
      console.log(`Example app listening at http://localhost:3000`)
  });
});