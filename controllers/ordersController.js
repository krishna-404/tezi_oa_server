let orderAnalystDB = require("../MongoUtil").getOrderAnalystDB;
const config = require("../config");

function ordersController() {
  this.lastAutoCreate = async (req, res) => {
    let lastAutoCreateTime = await orderAnalystDB().findOneAndUpdate(
      {
        type: "lastUpdateTimes",
      },
      {
        $push: {
          [req.params.platformField]: {
            $each: [new Date().toISOString()],
            $position: 0,
          },
        },
      },
      {
        upsert: true,
        returnDocument: "before",
      }
    );

    res.status(200).json(lastAutoCreateTime);
  };

  this.ordersExist = async (req, res) => {
    console.log("ordersController.ordersExist line 8", req.body);

    if (req.body.action === "Check orders exist") {
      // let getData = await orderDataDB().find({
      //     mktplOrderId: {
      //         $in: req.body.pageOrderIds
      //     },
      //     // marketplaceName: {$eq: req.body.marketplace},
      //     mktplSellerId: {$eq: req.body.mktplSellerId}
      // }).toArray();

      // console.log({getData});

      let { marketplaceName, mktplSellerId, nextElementMarker } = req.body;

      let ordersIdsToCreate = [];
      for (let orderId of req.body.pageOrderIds) {
        let getData = await orderAnalystDB().findOne({
          mktplOrderId: { $eq: orderId },
          marketplaceName,
          mktplSellerId,
        });

        if (!getData) {
          ordersIdsToCreate.push(orderId);
        }
      }

      res
        .status(200)
        .json({
          ordersIdsToCreate,
          marketplaceName,
          mktplSellerId,
          nextElementMarker,
        });
    } else {
      res.status(404).json({ status: "error", message: "Wrong API" });
    }
  };
}

module.exports = ordersController;
