import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

import localStorageMock from '../mock/localStorage';

window.localStorage = localStorageMock;

it('renders without crashing', () => {
  expect(() => shallow(<App />)).not.toThrow();
});
