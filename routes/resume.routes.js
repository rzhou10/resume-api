const resume = require('../controllers/resume.controller');

module.exports = function (app, express) {
  const router = express.Router();

  router.get('/resume', resume.resume);

  app.use('/', router);
}