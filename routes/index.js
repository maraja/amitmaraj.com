var express = require('express');

var email = require('../Helpers/email');
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

router.post('/contact', function(req, res, next) {
	console.log("BODY")
	console.log(req.body)

	email.sendMail(req.body.name, req.body.email, req.body.telephone, 'amit.maraj@gmail.com', 'Someone has contacted you on amitmaraj.com!', req.body.message)
	.then(result => {
  		res.render('thankyou', { title: 'Amit Maraj - Thank You', result: result });
	}).catch(error => {
  		res.render('thankyou', { title: 'Amit Maraj - Thank You', error: error });
	})

});

module.exports = router;
