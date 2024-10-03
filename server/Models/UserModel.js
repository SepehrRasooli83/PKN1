const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  phoneNumber: {
    type: String,
    required: [true, "Your phone number is required"],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Your name is required"],
  },
  surname: {
    type: String,
    required: [true, "Your surname is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User", userSchema);