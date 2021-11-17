// dir for all the action creators

/**
 * action creator must return an action and if it includes a call to api
 * one should following steps
 * 
 * 1. import symbols from ../middleware/symbols.js you want to use
 * 2. there are five types of requests
 *      1. GET_API {with and without token}
 *      2. POST_API {with and without token}
 *      3. PUT_API {with and without token, with and without body}
 *      4. DELETE_API {with and without token, with and without body}
 *      5. REST_API {pass the config in action creator}
 * 
 * 
 * for 1-4
 *   -   if for any api call, if that needs to be authenticated, one can pass that,
 *           with a boolean attribute named authenticated
 *      
 *   -   the requests where body is required (2),
 *       one can pass body in action creator as an attribute
 *       as of type js object
 * 
 * for 5th
 *   -   config needs to be passed as attribute in action creator with key name `config`
 *       if it doesn't get passed, request will be sent as following
 *       {
 *          method: 'GET'
 *       }
 * for 1-5
 *   -  each action creator must include 2 attributes,
 *      `endpoint` and `types`
 * 
 *   -  `endpoint` is defines the link to api,
 *   -  `types` must be an array, and it should include 3 action types
 *      1. request type, which gets triggered when the api gets called
 *      2. success type, which gets triggered when api gets successfully called,
 *      3. error or fail type, which gets triggered when api call gets failed
 *     and these should be in same sequence as mentioned
 *     these actions would be handled from reducers
 * 
 *      we can use ./ApiActions.js to use ../config.js as a env variables, in a sense
 * 
 */
 import { GET_API } from "../../../middleware/symbols";

 import {
     GET_FORM_REQUEST,GET_FORM_SUCCESS,GET_FORM_FAILURE
 } from './constants';
 
 import {
     HANDLE_DRAWER_TOGGLE_CHANGE
 } from './constants';
 import { baseApi } from "../../../common/actions/index";
 
 const BASE_URL = baseApi()
 
 // Action Creators
 export function getData() {
     return {
         [GET_API]:{
             endpoint: BASE_URL + '/parameters',
             authenticated: true,
             types: [ GET_FORM_REQUEST,GET_FORM_SUCCESS,GET_FORM_FAILURE],
         }
     }
 }
 export function handleDrawerToggleChange(toggleStatus) {
     return {type: HANDLE_DRAWER_TOGGLE_CHANGE, toggleStatus}
 }
 
 