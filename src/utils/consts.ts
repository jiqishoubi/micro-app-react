import md5 from 'md5'

const { origin } = window.location
const ENV: string = process.env.ENV as string // 'development'
const envConfig = {
  // 测试环境
  development: {
    apiPath: 'https://lyapit.bld365.com',
    doctor: {
      devPort: '9032',
      origin: 'http://localhost:9032',
    },
  },
  // 生产环境
  production: {
    apiPath: 'https://lyapi.bld365.com',
    doctor: {
      devPort: '9032',
      origin: 'http://localhost:9032',
    },
  },
}
export const ENV_CONFIG = envConfig[ENV]
export const LOGIN_TOKEN_KEY = md5(`_${origin}_login_storage_token_key`)
export const LOGIN_PATH = '/user/login'
