const HistoricalSite = require("../models/HistoricalSite");

const HistoricalSiteController = {
  // Create HistoricalSite
  createHistoricalSite: async (req, res) => {
    try {
      // Create new HistoricalSite
      const newHistoricalSite = await new HistoricalSite({
        site_name: req.body.site_name,
        province_name: req.body.province_name,
        region: req.body.region,
        address: req.body.address,
        map_diagram: req.body.map_diagram,
        image: [
          {
            image_name: req.body.image[0].image_name,
            image_link: req.body.image[0].image_link,
            description: req.body.image[0].description,
          },
          {
            image_name: req.body.image[1].image_name,
            image_link: req.body.image[1].image_link,
            description: req.body.image[1].description,
          },
        ],
      });
      const site = await newHistoricalSite.save();
      res.status(200).json(site);
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  },
  // Get all users

  // Delete user
};

module.exports = HistoricalSiteController;
