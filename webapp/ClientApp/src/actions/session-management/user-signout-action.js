
import Actions from '../action-constants';

const userSignOut = () => {

    return function (dispatch) {
        dispatch({
            type: Actions.UserSignOut
        });
    };

};

export default userSignOut;