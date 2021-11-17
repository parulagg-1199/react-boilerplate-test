import { POST_API } from './symbols'

import { isValidJSON } from './index'

function postApi(endpoint, body, authenticated){
    let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }

    if(authenticated) {
        const token = localStorage.getItem('token');
        config.headers['Authorization'] = `Bearer ${token}`
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

export default store => next => action => {
    const postApiDetails = action[POST_API];
    if (typeof postApiDetails === 'undefined') {
        return next(action)
    }
    let {endpoint, types, body, authenticated} = postApiDetails;
    const [requestType, successType, errorType] = types;

    return(
        next({type: requestType}),
        postApi(endpoint, body, authenticated).then(
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