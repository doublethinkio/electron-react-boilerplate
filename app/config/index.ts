import type { EasyPeasyConfig } from 'easy-peasy'
import { createLogger } from 'redux-logger'
import themes from './themes'

class Config {
  public easyPeasy = {
    /**
     * @see https://easy-peasy.now.sh/docs/api/store-config.html
     */
    get storeConfig(): EasyPeasyConfig {
      const middleware = []

      const excludeLoggerEnvs = ['test', 'production']
      const shouldIncludeLogger = !excludeLoggerEnvs.includes(
        process.env.NODE_ENV || ''
      )

      if (shouldIncludeLogger) {
        /**
         * @see https://github.com/LogRocket/redux-logger
         */
        const logger = createLogger({
          level: 'info',
          collapsed: true,
        })

        middleware.push(logger)
        // TODO: https://github.com/ctrlplusb/easy-peasy/issues/304
      }

      return {
        name: 'EasyPeasyStore',
        devTools: true,
        disableImmer: false,
        middleware,
      }
    },
  }

  public theme = themes.default
}

const config = new Config()

export default config
