export default /* GraphQL */ `
	type File {
		id: ID!
		path: String!
		filename: String!
		mimetype: String!
	}
	scalar Upload
	type Query {
		uploads: [File]
	}
	type Mutation {
		singleUpload(file: Upload!): File!
		multipleUpload(files: [Upload!]!): [File!]!
	}
`;
