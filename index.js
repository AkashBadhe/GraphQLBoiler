import express from 'express';
import expressGraphQL from 'express-graphql';
import { graphqlUploadExpress } from 'graphql-upload';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
const path = require('path');

import schema from './graphql/';

const app = express();
const PORT = process.env.PORT || '4000';
const db = 'mongo-db-connection-string';

// Connect to MongoDB with Mongoose.
mongoose
	.connect(
		db,
		{
			useCreateIndex: true,
			useNewUrlParser: true
		}
	)
	.then(() => console.log('MongoDB connected'))
	.catch(err => console.log(err));

app.use('/static', express.static(path.join(__dirname, 'Uploads')));
app.use(
	'/graphql',
	cors(),
	bodyParser.json(),
	graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
	expressGraphQL({
		schema,
		graphiql: true
	})
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
