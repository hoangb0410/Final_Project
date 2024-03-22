const mongoose = require("mongoose");

const historicalSiteSchema = new mongoose.Schema(
  {
    site_name: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    province_name: {
      type: String,
      require: true,
      max: 50,
    },
    region: {
      type: String,
      require: true,
      min: 6,
    },
    address: {
      type: String,
      require: true,
      max: 80,
    },
    map_diagram: {
      type: String,
      max: 80,
    },
    image: [
      {
        image_name: { type: String, require: true },
        image_link: { type: String, require: true },
        description: { type: String, require: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("HistoricalSite", historicalSiteSchema);
