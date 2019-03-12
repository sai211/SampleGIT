var express = require('express');
var router = express.Router();

/* POST home page. */
router.post('/', function(req, res, next) {
    let val1 = req.body.firstval;
    let val2 = req.body.secondval;

    let ans = val1 - val2;
    let nval = ans + '';
    //res.send(nval);
    res.render('subs', { title: 'Substraction', firstval: val1, secondval: val2, answer: nval});
});

module.exports = router;