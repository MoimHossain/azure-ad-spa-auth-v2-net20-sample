

import Actions from '../../actions/action-constants';

const changeRoute = (action) => {
    return action.payload.routeHistory.push(action.payload.targetRoute);
};

export default function (state = null, action) {
    switch (action.type) {
        case Actions.ChangeRoute:
            changeRoute(action);
            return state;
        default: return state;
    }
}

