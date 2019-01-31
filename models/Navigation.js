import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Create the Navigation Schema.
const NavigationSchema = new Schema({
	id: {
		type: String,
		required: true,
		unique: true
	},
	title: {
		type: String,
		required: true
	},
	link: {
		type: String,
		required: true
	}
});

const Navigation = mongoose.model('Navigation', NavigationSchema);

export default Navigation;
