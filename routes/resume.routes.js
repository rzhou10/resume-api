import {resume} from "../controllers/resume.controller.js"

export default function routes (app, express) {
  const router = express.Router();

  router.get('/resume', resume);

  app.use('/', router);
}