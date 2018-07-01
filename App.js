var express = require('express');
var app = express();
var port = process.env.PORT || 8045;
var ejs = require('ejs');


app.set('view engine', 'ejs' );

/*************************************
	page d'acceuil

***************************************/

app.get('/',function(req,res){

	res.sendFile(__dirname +'/fiche_de_poste.html');


});


app.listen(port);