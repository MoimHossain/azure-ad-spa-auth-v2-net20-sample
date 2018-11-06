
import AuthService from '../../services/authorizationService';
import Actions from '../../actions/action-constants';

const signOutFunc = () => {
    new AuthService().logOut();
    document.location.reload(true);
    return {};
};

export default function (state = null, action) {
    switch (action.type) {
        case Actions.UserSignOut:
            return signOutFunc();
        default: return state;
    }
}

