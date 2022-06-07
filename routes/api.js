const OrderController = require(__basedir + "/controllers/ordersController.js");
const router = (app) => {
    
    const orderController = new OrderController();
    app
        .route("/")
        .get((req, res) => {
            res.sendFile(__basedir + "/public/homePage.html");
        })

    app 
        .route("/order/exists/)
        .get(orderController.ordersExist)

    app
        .route("/order/create")
        .post(orderController.createOrder)

};

module.exports = router;