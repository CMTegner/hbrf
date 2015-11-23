import 'babel-polyfill';
import React from 'react';
import DOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import ColorButton from './containers/color-button.js';

DOM.render(
    <Provider store={store}>
        <ColorButton />
    </Provider>,
    document.getElementById('container')
);
