const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// const pug = require('pug');
// const df = require('dateformat');

const app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({encoded: true}));

const candiesController = require('./controller/candies')(app);

// //	set template engine
// app.set('views', path.join(__dirname,'views'));
// app.set('view engine','pug');
//
// //	static file support
// app.use(express.static(path.join(__dirname,'public')));
//
// app.get('/', (req,res) => {
// 		var textToDisplay = (Math.random()>0.5)? 'Welcome to WDI Hong Kong' :
// 																						  'Welcome to WDI Singapore';
// 		res.render('index' , {title:textToDisplay, message:textToDisplay});
// });
//
// app.get('/about/file', (req, res)=>{
// 	res.render('index', {title:123, message:'MyuioL'});
// });
//
// app.get('/about', (req,res) => { res.send('from about. Hello WDI Singapore'); });

app.listen(3000, ()=>{ console.log('Node.js listening on port 3000'); });
