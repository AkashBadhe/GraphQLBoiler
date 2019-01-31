import { mergeTypes } from 'merge-graphql-schemas';

import User from './User/';
import Navigation from './Navigation';
const typeDefs = [User, Navigation];

export default mergeTypes(typeDefs, { all: true });
