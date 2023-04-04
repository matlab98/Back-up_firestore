const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Register = mongoose.model('Register', registerSchema);

module.exports = Register;


const { EventEmitter } = require('events');

class User extends EventEmitter {
  constructor(id, name, email) {
    super();
    this.id = id;
    this.name = name;
    this.email = email;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
    };
  }
}