import { merge } from 'lodash';
import User from './User';
import Navigation from './Navigation';
import Email from './Email';
import Images from './Images';
export default merge(User, Navigation, Email, Images);
