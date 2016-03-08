var express = require('express');
var router = express.Router();

//var http = require('http');

/* GET home page. */
router.get('/', function(req, res, next) {
    /*var options = {
      host: '',
      port: 443,
      path: '/wcs/resources/store/10701/productview/byId/1415062'
    };
    

    http.get(options, function(response){
        var str = '';
    
        // datachunks to string
        response.on('data', function (chunk) {
            str += chunk;
        });
        
        response.on('end', function () {
            //var content = JSON.parse(str)
            console.log("STR");
            console.log(str);
        
            res.render('index', { title: str });
            
        });
        
    }).on("error", function(e){
        console.log(e);*/
            res.render('index', { title: 'test_title' });
    //});

    

});

module.exports = router;