const OrderController = require(__basedir + "/controllers/ordersController.js");
const DbDocCreation = require(__basedir + "/controllers/dbDocCreation.js")

const router = (app) => {
    
    const orderController = new OrderController();
    const dbDocCreation = new DbDocCreation();

    app
        .route("/")
        .get((req, res) => {
            res.sendFile(__basedir + "/public/homePage.html");
        })

    app 
        .route("/order/exists/")
        .post(orderController.ordersExist)

    app
        .route("/createBulkDocs")
        .post(dbDocCreation.bulkCreate);

    app 
        .route("/lastOrderAutoUpdate/:platformField")
        .get(orderController.lastAutoCreate)

};

module.exports = router;