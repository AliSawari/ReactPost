import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import Store from './store';

import {Container, PostList} from './components';

// class Main extends Component {
// 	constructor(props){
// 		super(props);
// 	}

// 	render(){
// 		return <div>
// 			<Provider store={Store}>
// 				<Container>
// 					<PostList />
// 				</Container>
// 				</Provider>
// 		</div>
// 	}
// }

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
