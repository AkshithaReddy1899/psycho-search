import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import matches from './test-utils';
import store from '../redux/store';
import List from '../components/List';

describe('Home', () => {
  it('Home matched snapshot', () => {
    matches(<Provider store={store}><BrowserRouter><List /></BrowserRouter></Provider>);
  });
});
