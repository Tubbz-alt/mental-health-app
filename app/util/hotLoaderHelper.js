/* Helper: HotAppLoader
  * - enable middleware for hot-reloads in development
  */

const useHotStoreLoaderHelper = store => {
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index').default;

      store.replaceReducer(nextRootReducer);
    });
  }
}

export { useHotStoreLoaderHelper };
