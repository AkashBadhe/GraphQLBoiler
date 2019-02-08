import React, { Component } from 'react';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { createUploadLink } from 'apollo-upload-client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Users from './components/users';
import { ApolloProvider } from 'react-apollo';
import Navigation from './components/navigation';
import FileUploader from './components/fileUploader';
import MultiFileUploader from './components/multiFileUploader';
import gql from 'graphql-tag';

const createApolloClient = (cache = {}) =>
	new ApolloClient({
		ssrMode: typeof window !== 'undefined',
		cache: new InMemoryCache().restore(cache),
		link: createUploadLink({ uri: 'http://localhost:4000/graphql' })
	});

class App extends Component {
	apolloClient = this.props.apolloClient || createApolloClient(this.props.apolloCache);

	componentDidMount() {
		this.apolloClient
			.query({
				query: gql`
					{
						users {
							id
							name
							email
						}
					}
				`
			})
			.then(result => console.log(result));
	}

	render() {
		return (
			<ApolloProvider client={this.apolloClient}>
				<Navigation />
				<div className="App">
					<div>
						<h2>Upload files</h2>
						<MultiFileUploader />
					</div>
				</div>
			</ApolloProvider>
		);
	}
}

export default App;
