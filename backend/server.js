const express = require('express')
const app = express()
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
var routes = require('./routes/routes');
const cors = require('cors');

app.use(cors());

app.listen(8000,function check(err)
{
    if(err)
    console.log("error")
    else
    console.log("started")
});

mongoose.connect("mongodb://0.0.0.0:27017/patientmanagement",{useNewUrlParser: true,  useUnifiedTopology: true },
function checkDb(error)
{
    if(error)
    {
        console.log("Error Connecting to DB");
    }
    else
    {
        console.log("successfully Connected to DB");
    }
});
/*app.post('/seat', function(req, res) {
  var user = new seat({
      rowno: req.body.rowno
  });*/

  /*user.save(function(err) {
      if (err) {
          // you could avoid http status if you want. I put error 500 
          return res.status(500).send({
              success: false,
              message: 'Row already exist!'
          });
      }

      res.json({
          success: true
      });

  });
})*/
app.use(express.json());
app.use(routes);
