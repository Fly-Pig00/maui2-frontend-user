// @flow
/**
 * @module Reducers/Workflows
 * @desc Workflows Reducer
 */

 import { handleActions } from 'redux-actions';
 import { WorkflowConstants } from '../constants/workflowConstants';
 import { requestPending, requestSuccess, requestFail } from '../../utils/fetch';
 
 const initialState = {
   key: '',
   data: {},
 };
 
 export default handleActions({
   [requestPending(WorkflowConstants.NEXT_ACTION)]: state => ({
     ...state,
     isLoading: true,
     error: null,
   }),
   [requestSuccess(WorkflowConstants.NEXT_ACTION)]: (state, action) => ({
     ...action.payload,
     isLoading: false,
     error: null,
   }),
   [requestFail(WorkflowConstants.NEXT_ACTION)]: (state, action) => ({
     ...state,
     error: action.payload,
     isLoading: false,
   }),
 
   [requestPending(WorkflowConstants.BACK_ACTION)]: state => ({
     ...state,
     isLoading: true,
     error: null,
   }),
   [requestSuccess(WorkflowConstants.BACK_ACTION)]: (state, action) => ({
     ...action.payload,
     isLoading: false,
     error: null,
   }),
   [requestFail(WorkflowConstants.BACK_ACTION)]: (state, action) => ({
     ...state,
     error: action.payload,
     isLoading: false,
   }),
   
   [requestPending(WorkflowConstants.START_ACTION)]: state => ({
     ...state,
     isLoading: true,
     error: null,
   }),
   [requestSuccess(WorkflowConstants.START_ACTION)]: (state, action) => ({
     ...action.payload,
     isLoading: false,
     error: null,
   }),
   [requestFail(WorkflowConstants.START_ACTION)]: (state, action) => ({
     ...state,
     error: action.payload,
     isLoading: false,
   }),
 }, initialState);
 