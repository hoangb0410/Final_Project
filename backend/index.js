const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const siteRoute = require("./routes/historicalSite");
const HistoricalSite = require("./models/HistoricalSite");

const app = express();

dotenv.config();
const connectToMongo = async () => {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("Connected to MongoDB");
};

connectToMongo();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);
app.use("/v1/historicalSite", siteRoute);

app.listen(8000, () => {
  console.log("Server is running");
});
