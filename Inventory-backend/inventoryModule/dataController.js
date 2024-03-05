const inventoryModel = require("./schema");

exports.createInventory = async (req, res, next) => {
  try {
    const newItemData = req.body;
    const newBatchesData = newItemData.batch; // Assuming batch data is in req.body.batch
    delete newItemData.batch; // Remove batch data from item data

    const newItem = new inventoryModel(newItemData);
    if (req.file) {
      newItem.file = req.file.filename;
    }
    await newItem.save();
 
    // Save batches data
    const newItemId = newItem._id;
    await inventoryModel.findByIdAndUpdate(newItemId, { $push: { batch: newBatchesData } }, { new: true });

    res.status(201).json({ message: "Item created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getInventory = async (req, res) => {
  await inventoryModel
    .find({})
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
};

exports.getListItem = async (req, res) => {
  await inventoryModel
    .findOne({ _id: req.params.id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
};

exports.deleteListItem = async (req, res) => {
  await inventoryModel
    .deleteOne({ _id: req.params.id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
};