import { PUT_API } from './symbols'

import { isValidJSON } from './index'

function putApi(endpoint, body, authenticated) {
    let config = {
        method: 'PUT'
    }

    if (authenticated) {
        const token = localStorage.getItem('token') || null;
        config['headers'] = {
                'Authorization': `Bearer ${token}`
            }
    }

    if(typeof body !== 'undefined') {
        config['body'] = JSON.stringify(body)
    }

    return fetch(endpoint, config).then(
        response => {
            if (response.status === 200) {
                return response.text().then(data => {
                    return isValidJSON(data) ? ({data: JSON.parse(data), status: response.status}) : ({
                        data: {
                            error: true,
                            message: "Error while parsing the json."
                        }, status: response.status
                    })
                })
            } else {
                return response.json().then(data =>
                    ({data, status: response.status})
                )
            }
        }
    )
    .catch(err => ({data: {error: true, message: "Internal Server Error"}, status: 500}));

}

/**
 * ,
        headers: {
            'Authorization': `Bearer ${token}`
        }
 */

export default store => next => action => {
    const putApiDetails = action[PUT_API];
    if (typeof putApiDetails === 'undefined') {
        return next(action)
    }

    let {endpoint, types, body, authenticated} = putApiDetails;
    const [requestType, successType, errorType] = types;

    return (
        next({type: requestType}),
        putApi(endpoint, body, authenticated).then(
            response => {
                if (response.status === 200) {
                    return next({
                        response,
                        type: successType
                    })
                } else {
                    return next({
                        response,
                        type: errorType
                    })
                }
            }
        )
    )
}