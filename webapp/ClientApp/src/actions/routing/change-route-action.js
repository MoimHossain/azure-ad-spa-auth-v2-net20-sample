
import Actions from '../action-constants';

const changeRoute = (targetRoute, routeHistory) => {
    
    return function (dispatch) {
        dispatch({
            type: Actions.ChangeRoute,
            payload: {
                targetRoute: targetRoute,
                routeHistory: routeHistory
            }
        });
    };

};

export default changeRoute;