/**
 * Mock local storage object
 */

const localStorageMock = (() => {
  const store = {
    'app-token': 'test token',
  };

  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    removeItem(key) {
      delete store[key];
    },
  };
})();

export default localStorageMock;
