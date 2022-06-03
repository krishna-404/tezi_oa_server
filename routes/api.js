const OrderController = require(__basedir + "/conrollers/ordersController.js")
const router = (app) => {
    app
        .route("/")
        .get((req, res) => {
            res.sendFile(__basedir + "/public/homePage.html");
        })

    app
        .route("/order/create")

}