import { mergeTypes } from 'merge-graphql-schemas';

import User from './User/';
import Navigation from './Navigation';
import Email from './Email';
import Image from './Image';
const typeDefs = [User, Navigation, Email, Image];

export default mergeTypes(typeDefs, { all: true });
