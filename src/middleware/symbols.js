// here are all the symbols of the middleware api calls taht one can use

let Symbol = require('es6-symbol');

export const GET_API = Symbol('Get API');
export const POST_API = Symbol('Post API');
export const PUT_API = Symbol('Put API');
export const DELETE_API = Symbol('Delete API');

export const REST_API = Symbol('Rest API')


// token
// export const DELETE_API_WITH_BODY = Symbol('Call Delete API with body');

// export const PUT_API_WITHOUT_BODY = Symbol('Call Put API Without Body');



// without token
// export const GET_API_WITHOUT_TOKEN = Symbol('Call API Without Token');
// export const POST_API_WITHOUT_TOKEN = Symbol('Post Without Token');