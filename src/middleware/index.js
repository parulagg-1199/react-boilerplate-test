import getApi from './get-api';
import postApi from './post-api';
import deleteApi from './delete-api';
import putApi from './put-api';
import restApi from './rest-api';


export function isValidJSON(data) {
    try {
        JSON.parse(data);
    } catch (e) {
        return false
    }
    return true
}

export default {
    getApi,
    postApi,
    deleteApi,
    putApi,
    restApi,
}