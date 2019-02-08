import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
const Users = () => (
	<Query
		query={gql`
			{
				users {
					name
					email
					id
				}
			}
		`}
	>
		{({ loading, error, data }) => {
			if (loading) return <p>Loading...</p>;
			if (error) return <p>Error :(</p>;
			return data.users.map(({ id, name, email }) => (
				<div key={id}>
					<p>{`${name} - ${email}`}</p>
				</div>
			));
		}}
	</Query>
);
export default Users;
