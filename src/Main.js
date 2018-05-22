import React, {Component} from 'react';
import {render} from 'react-dom';

import {Container, Show} from './components';

const Main = () => (
	<Container>
		<Show />
	</Container>
);

render(<Main />, document.getElementById('root'));


// adding few lines here
