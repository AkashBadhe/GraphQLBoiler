import { mergeTypes } from 'merge-graphql-schemas';

import User from './User/';
import Navigation from './Navigation';
import Email from './Email';
const typeDefs = [User, Navigation, Email];

export default mergeTypes(typeDefs, { all: true });
