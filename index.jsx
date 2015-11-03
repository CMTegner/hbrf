import React from 'react';
import DOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import ColorButton from './containers/color-button';

DOM.render(
    <Provider store={store}>
        <ColorButton />
    </Provider>,
    document.getElementById('container')
);
