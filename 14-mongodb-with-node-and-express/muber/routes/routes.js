const DriversController = require('../controllers/drivers-controller');

module.exports = (app) => {
    app.get('/api', DriversController.greeting);

}
