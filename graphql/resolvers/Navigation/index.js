// The Navigation schema.
import Navigation from '../../../models/Navigation';

export default {
	Query: {
		link: (root, args) => {
			return new Promise((resolve, reject) => {
				Navigation.findOne(args).exec((err, res) => {
					err ? reject(err) : resolve(res);
				});
			});
		},
		navigation: () => {
			return new Promise((resolve, reject) => {
				Navigation.find({})
					.populate()
					.exec((err, res) => {
						err ? reject(err) : resolve(res);
					});
			});
		}
	},
	Mutation: {
		addLink: (root, { id, title, link }) => {
			const newNavigation = new Navigation({ id, title, link });

			return new Promise((resolve, reject) => {
				newNavigation.save((err, res) => {
					err ? reject(err) : resolve(res);
				});
			});
		},
		editLink: (root, { id, title, link }) => {
			return new Promise((resolve, reject) => {
				Navigation.findOneAndUpdate({ id }, { $set: { title, link } }).exec((err, res) => {
					err ? reject(err) : resolve(res);
				});
			});
		},
		deleteLink: (root, args) => {
			return new Promise((resolve, reject) => {
				Navigation.findOneAndRemove(args).exec((err, res) => {
					err ? reject(err) : resolve(res);
				});
			});
		}
	}
};
