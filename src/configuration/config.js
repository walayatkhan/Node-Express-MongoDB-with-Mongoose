// NO ES6 HERE as it's used by several binaries not using babel
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(process.cwd(), '.config/.env') });

const environment = process.env.NODE_ENV || 'development';
const isLocal = !!process.env.NODE_ENV;
const port = parseInt(process.env.PORT) || 3333;

module.exports = {
	APP_SECRET: process.env.APP_SECRET,
	ENVIRONMENT: environment,
	DB_USER: process.env.DB_USER,
	DB_PASSWORD: process.env.DB_PASSWORD,
	IS_PRODUCTION: environment === 'production',
	IS_STAGING: environment === 'staging',
	IS_DEVELOPMENT: environment === 'development',
	IS_TEST: environment === 'test',
	PORT: port,
	KILL_TIMEOUT: parseInt(process.env.KILL_TIMEOUT) || 5 * 1000,
	NODE_APP_INSTANCE: parseInt(process.env.NODE_APP_INSTANCE) || 0,
	IS_LOCAL: isLocal,
	SITE_URL: process.env.SITE_URL || `http://localhost:${port}`,
	DATABASE: {
		HOST: process.env.DB_HOST,
		PORT: process.env.DB_PORT || 5432,
		NAME: process.env.DB_NAME,
		USER: process.env.DB_USER,
		PASSWORD: process.env.DB_PASSWORD,
	},
	
	DEFAULT_PAGINATION_LIMIT: 100,
};
