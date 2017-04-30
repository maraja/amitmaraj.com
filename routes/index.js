var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Amit Maraj' });
});

router.get('/teaching', function(req, res, next) {
  res.render('teaching', { title: 'Amit Maraj - Teaching' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Amit Maraj - Client Projects' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Amit Maraj - Contact Me' });
});

module.exports = router;
