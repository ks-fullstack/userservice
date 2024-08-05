const helmet = require('helmet');

class SecurityMiddleware {
    constructor(app) {  
		//Security Headers
		app.use(helmet.hidePoweredBy());
		app.use(helmet.frameguard({ action: 'deny' }));
		app.use(helmet.noSniff());
		app.use(helmet.xssFilter());
		app.use(helmet.referrerPolicy({ policy: 'no-referrer' }));
		// Sets "X-Download-Options: noopen".
		app.use(helmet.ieNoOpen());
		let sixtyDaysInSeconds = 5184000;
		app.use(helmet.hsts({
  			maxAge: sixtyDaysInSeconds
		}));
		app.use(helmet.contentSecurityPolicy({
			directives: {
				defaultSrc: ["'self'"],
				styleSrc: ["'self'", 'localhost:5000'],
    			scriptSrc: ["'self'", "'unsafe-inline'"],
    			sandbox: ['allow-forms', 'allow-scripts']
			}
		}));		

		//Request Headers
		app.use(function (req, res, next) {
			// Website you wish to allow to connect
			res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
		
			// Request methods you wish to allow
			res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
		
			// Request headers you wish to allow
			res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
		
			// Set to true if you need the website to include cookies in the requests sent
			// to the API (e.g. in case you use sessions)
			res.setHeader('Access-Control-Allow-Credentials', false);
		
			// Pass to next layer of middleware
			next();
		});
    }
}

module.exports = SecurityMiddleware;