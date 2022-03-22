import { JobOfferCollection } from "./jobofferModel";

const JobofferController = {
  getJobsOffers: async (req, res) => {
    const params = {};
    if (req.query.candidates_id) {
      params["candidates_id"] = req.params.candidates_id;
      await JobOfferCollection.find({
        candidates_id: { $in: req.query.candidates_id },
      })
        .then((docs) => {
          res.json(docs);
        })
        .catch((err) => console.log(`Error getting the data from DB: ${err}`));
    } else {
      await JobOfferCollection.find(params)
        .then((docs) => {
          res.json(docs);
        })
        .catch((err) => console.log(`Error getting the data from DB: ${err}`));
    }
  },
  getJobOffer: async (req, res) => {
    await JobOfferCollection.findById({ _id: req.params.id })
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },
  addJobOffer: async (req, res) => {
    const addJoboffer = req.body.addJoboffer;
    await JobOfferCollection.insertMany(addJoboffer)
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },
  updateJobOffer: async (req, res) => {
    const updateJobOffer = req.body.updateJobOffer;
    await JobOfferCollection.updateOne({ id: req.params.id }, updateJobOffer)
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },
  deleteJobOffer: async (req, res) => {
    await JobOfferCollection.findOneAndDelete({ id: req.params.id })
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => console.log(`Error getting the data from DB: ${err}`));
  },
};

export default JobofferController;