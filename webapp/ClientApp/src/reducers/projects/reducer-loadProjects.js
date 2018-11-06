

import Actions from '../../actions/action-constants';



export default function (state = null, action) {
    switch (action.type) {
        case Actions.LoadProjects:
            return action.payload;
        default: return state;
    }
}

