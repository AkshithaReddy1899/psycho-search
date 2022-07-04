import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import matches from './test-utils';
import store from '../redux/store';
import Home from '../components/Home';

describe('Home', () => {
  it('Home matched snapshot', () => {
    matches(<Provider store={store}><BrowserRouter><Home /></BrowserRouter></Provider>);
  });
});
