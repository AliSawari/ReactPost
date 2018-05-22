import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

import {Container, Show} from './components';

const Main = () => (
	<Provider store={store}>
		<Container>
			<Show />
		</Container>
	</Provider>
);

render(<Main />, document.getElementById('root'));


// adding few lines here
