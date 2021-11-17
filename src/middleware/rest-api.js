import each from 'lodash/each';

import { REST_API } from './symbols';
import { isValidJSON } from './index'

function callApi(endpoint, config ) {
    return fetch(endpoint, config)
        .then((response)=>{
            if (response.status === 200) {
                return response.text().then(data=>{
                    return isValidJSON(data)?({data: JSON.parse(data), status: response.status}):({data: {error: true, message: "Unable to parse json."}, status: response.status})
                })
            }
            else {
                return response.json().then(data =>
                    ({data, status: response.status})
                )
            }
        })
        .catch(() => ({data:{error: true, message: "Internal Server Error"}, status: 500}));
}

function validateConfig(config) {
    const availRest = {
        method: ["GET", "POST", "PUT", "DELETE"],
        mode: ["same-origin", "cors", "no-cors"],
        cache: ["default", "no-cache", "reload", "force-cache", "only-if-changed"],
        credentials: ["same-origin", "include", "omit"],
        redirect: ["follow", "manual", "error"],
        referrer: ["client", "no-referrer"]
    }
    if(!availRest.method.includes(config.method)) {
        config.method = availRest.method[0]
    }
    var checkList = ["mode", "cache", "credentials", "redirect", "referrer"]
    each(checkList, i => {
        if(config[i] !== undefined && !availRest[i].includes(config[i])){
            config[i] = availRest[i][0]
        }
    })
}

export default store => next => action => {
    // name for api call details
    const restApiDetails = action[REST_API]
    // if api is not called in some action
    if(typeof restApiDetails === 'undefined') {
        return next(action);
    }
    // extract parts
    let {endpoint, types, config} = restApiDetails;
    // validate config
    if(config === null || typeof config !== 'object'){
        config = {}
    }
    validateConfig(config)
    // extract types
    const [requestType, successType, errorType] = types;

    // call api with end point and config
    return (
        next({type: requestType}),
        callApi(endpoint, config).then(
            response => {
                if(response.status === 200) {
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