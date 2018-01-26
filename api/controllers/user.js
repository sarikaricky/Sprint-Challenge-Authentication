const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  // there should be a user object set on req
  // use that req.user object to create a user 
  //and save it to our Mongo instance.
};  
const newUser = new User(req.body.user)

newUser.name = tony(newUser.name)
newUser.save((err, saved) => {
  if (err) {
    res.status(500).send(err)
  }
  res.json({ user: saved })
})
}

  Tony.save((err, saved) => {
    if (err) {
      res.status(500).send(err)
    }
    res.json({ user: saved })
  })
}

module.exports = {
  createUser
};
