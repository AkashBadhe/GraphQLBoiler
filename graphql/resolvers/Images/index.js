import fs from 'fs';
import { GraphQLUpload } from 'graphql-upload';
import promisesAll from 'promises-all';
const path = require('path');
var appRoot = path.dirname(require.main.filename);
const targetPath = path.join(appRoot, './Uploads/');

const processUpload = async upload => {
	const { createReadStream, filename, mimetype } = await upload;
	if (createReadStream) {
		const filePath = targetPath + filename;
		const stream = createReadStream();
		console.log('Saving file :' + filename);
		stream
			.on('error', error => {
				if (stream.truncated)
					// delete the truncated file
					fs.unlinkSync(filePath);
				reject(error);
			})
			.pipe(fs.createWriteStream(filePath))
			.on('error', error => error)
			.on('finish', () => `/static/${filename}`);
		return {
			id: 1,
			path: `/static/${filename}`,
			filename: filename,
			mimetype: mimetype
		};
	} else {
		return {
			error: 'Error uploading files'
		};
	}
};

export default {
	Upload: GraphQLUpload,
	Query: {
		uploads: () => 'file uploaded'
	},
	Mutation: {
		singleUpload: (obj, { file }) => {
			try {
				console.log(file.name);
				return processUpload(file);
			} catch (e) {
				console.log(e);
			}
		},
		async multipleUpload(obj, { files }) {
			const { resolve, reject } = await promisesAll.all(files.map(processUpload));

			if (reject.length)
				reject.forEach(({ name, message }) =>
					// eslint-disable-next-line no-console
					console.error(`${name}: ${message}`)
				);

			return resolve;
		}
	}
};
