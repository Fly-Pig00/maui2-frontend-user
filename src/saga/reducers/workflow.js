// @flow
/**
 * @module Reducers/Workflows
 * @desc Workflows Reducer
 */

 import { handleActions } from 'redux-actions';
 import { WorkflowConstants } from '../constants/workflowConstants';
 import { requestPending, requestSuccess, requestFail } from '../../utils/fetch';
 
 const initialState = {
   balance: 0,
   mauiAddress: null, 
   terraAddress: null,
   isLogged: false,
 };
 
 export default handleActions({
   [requestPending(WorkflowConstants.SIGNIN_ACTION)]: state => ({
     ...state,
     isLoading: true,
     error: null,
   }),
   [requestSuccess(WorkflowConstants.SIGNIN_ACTION)]: (state, action) => ({
     ...state,
     // ...action.payload,
     isLogged: true,
     mauiAddress: action.payload.mauiAddress,
     terraAddress: action.payload.terraAddress,
     isLoading: false,
     error: null,
   }),
   [requestFail(WorkflowConstants.SIGNIN_ACTION)]: (state, action) => ({
     ...state,
     isLogged: false,
     mauiAddress: null,
     terraAddress: null,
     error: action.payload,
     isLoading: false,
   }),
   [requestSuccess(WorkflowConstants.SIGNOUT_ACTION)]: state => ({
     balance: 0,
     isLogged: false,
     mauiAddress: null,
     terraAddress: null,
   }),
 }, initialState);
 