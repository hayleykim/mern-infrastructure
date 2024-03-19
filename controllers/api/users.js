const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const bcrypt = require('bcrypt');


  
const create = async (req, res) => {
    try {
        const user = await User.create(req.body);
        const token = createJWT(user);
        res.json(token);
    } catch (err) {
        res.status(400).json(err);
    }
};

const login = async (req, res) => {
  try {
    const userEmail = req.body.email;
    const userPassword = req.body.password;

    //find the exisiting user
    const user = await User.findOne({email: userEmail});
    //does password match?
    const match = await bcrypt.compare(userPassword, user.password);

    if(!match) throw new Error('Invalid username or password');

    const token = createJWT(user);
    res.json(token);

  } catch (err) {
      res.status(400).json(err);
  }
}

function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  console.log('req.user', req.user);
  res.json(req.exp);
}

/*-- Helper Functions --*/

function createJWT(user) {
    return jwt.sign(
      // data payload
      { user },
      process.env.SECRET,
      { expiresIn: '24h' }
    );
  }
  
  module.exports = {
    create,
    login,
    checkToken
  };