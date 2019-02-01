import { merge } from 'lodash';
import User from './User';
import Navigation from './Navigation';
import Email from './Email';
export default merge(User, Navigation, Email);
