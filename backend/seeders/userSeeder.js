const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User"); // Adjust the path as needed

const seedUsers = async () => {
  let session;
  try {
    await mongoose.connect("mongodb://localhost:27017/ticketing-system");
    session = await mongoose.startSession();
    session.startTransaction();

    const hashedPassword = await bcrypt.hash("password", 10);

    const users = [
      {
        name: "John Doe",
        email: "user@example.com",
        password: hashedPassword,
        role: "user", // or any role handling your application uses
      },
      {
        name: "Admin",
        email: "admin@example.com",
        password: hashedPassword,
        role: "admin",
      },
    ];

    await User.insertMany(users, { session });
    await session.commitTransaction();
    console.log("Users seeded successfully.");
  } catch (err) {
    if (session) {
      await session.abortTransaction();
    }
    console.error("Error seeding users:", err);
  } finally {
    if (session) {
      session.endSession();
    }
    await mongoose.disconnect();
  }
};

seedUsers();
