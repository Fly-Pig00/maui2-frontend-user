// @flow
/**
 * @module Reducers/Workflows
 * @desc Workflows Reducer
 */

 import { handleActions } from 'redux-actions';
 import { WorkflowConstants } from '../constants/workflowConstants';
 import { requestPending, requestSuccess, requestFail } from '../../utils/fetch';
 
 const initialState = {
   token: '',
   mauiAddress: ''
 };
 
 export default handleActions({
   [requestPending(WorkflowConstants.SIGNIN_ACTION)]: state => ({
     ...state,
     isLoading: true,
     error: null,
   }),
   [requestSuccess(WorkflowConstants.SIGNIN_ACTION)]: (state, action) => ({
     ...action.payload,
     isLoading: false,
     error: null,
   }),
   [requestFail(WorkflowConstants.SIGNIN_ACTION)]: (state, action) => ({
     ...state,
     error: action.payload,
     isLoading: false,
   }),
   [requestPending(WorkflowConstants.SIGNOUT_ACTION)]: state => ({
    mauiAddress: null,
    isLoading: true,
    error: null,
  }),
  [requestSuccess(WorkflowConstants.SIGNOUT_ACTION)]: (state, action) => ({
    mauiAddress: null,
    isLoading: false,
    error: null,
  }),
  [requestFail(WorkflowConstants.SIGNOUT_ACTION)]: (state, action) => ({
    mauiAddress: null,
    error: action.payload,
    isLoading: false,
  }),
 }, initialState);
 