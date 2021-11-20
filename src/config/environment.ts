type Environment = 'PRODUCTION' | 'TESTING'

const ENV: Environment = (process.env.NEXT_PUBLIC_ENVIRONMENT ||
  'TESTING') as Environment

export default ENV
