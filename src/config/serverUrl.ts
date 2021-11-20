import ENV from './environment'

const API_URLS = {
  development: {
    TESTING: 'http://localhost:3000',
    PRODUCTION: 'http://localhost:3000',
  },
  production: {
    TESTING: 'https://testing.example.com',
    PRODUCTION: 'https://example.com',
  },
}

const NODE_ENV = process.env.NODE_ENV || 'development'

const SERVER_URL = API_URLS[NODE_ENV][ENV]

export default SERVER_URL
