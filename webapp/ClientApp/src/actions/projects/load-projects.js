
import Actions from '../action-constants';

const loadProjects = () => {

    return function (dispatch) {
        
        dispatch({
            type: Actions.LoadProjects,
            payload: [
                { id: 1, name: 'Xyz', brand: 'Line', program: 'Line' },
                { id: 2, name: 'Abc', brand: 'Line', program: 'Line' }]
        });
    };

};

export default loadProjects;