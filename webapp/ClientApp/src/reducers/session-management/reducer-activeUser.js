
import AuthService from '../../services/authorizationService';

export default function () {
    return new AuthService().getUser();
}