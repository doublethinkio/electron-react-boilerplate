// https://easy-peasy.now.sh/docs/typescript-tutorial/create-your-store.html#creating-the-store
import { createStore } from 'easy-peasy'
import config from 'app/config'
import { storeModel } from './models'

// https://github.com/ctrlplusb/easy-peasy/issues/304 Easy Peasy + React Router + TypeScript integration
export const store = createStore(storeModel, config.easyPeasy.storeConfig)

/**
 * @see https://easy-peasy.now.sh/docs/recipes/hot-reloading.html
 * Wrapping dev only code like this normally gets stripped out by bundlers
 * such as Webpack when creating a production build.
 * */
if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept(
      './models',
      () => store.reconfigure(storeModel) // 👈 Here is the magic
    )
  }
}

export default store
