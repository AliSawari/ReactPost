import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import Store from './store';

import {Container, PostList} from './components';

const Main = () => (
	<div>
		<Provider store={Store}>
			<Container>
				<PostList />
			</Container>
		</Provider>
	</div>
);



render(<Main />,document.getElementById('root'));
