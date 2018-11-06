
import { combineReducers } from 'redux';

import ChangeRouteReducer from './routing/reducer-changeRoute';
import ActiveUserReducer from './session-management/reducer-activeUser';
import UserSignOutReducer from './session-management/reducer-user-signout';
import Projects from './projects/reducer-loadProjects';


const allReducers = combineReducers({

    signout: UserSignOutReducer,
    activeUser: ActiveUserReducer,
    activeRoute: ChangeRouteReducer,
    projects: Projects
});

export default allReducers;