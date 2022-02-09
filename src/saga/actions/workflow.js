import { createAction } from 'redux-actions';
import { WorkflowConstants } from '../constants/workflowConstants';

export const startAction = createAction(WorkflowConstants.START_ACTION);
export const nextAction = createAction(WorkflowConstants.NEXT_ACTION);
export const backAction = createAction(WorkflowConstants.BACK_ACTION);
export const getIPAddress = createAction(WorkflowConstants.GET_IP_ADDRESS);
