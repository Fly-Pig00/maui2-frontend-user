import { createAction } from 'redux-actions';
import { WorkflowConstants } from '../constants/workflowConstants';

export const getIPAddress = createAction(WorkflowConstants.GET_IP_ADDRESS);
export const apiSignIn = createAction(WorkflowConstants.SIGNIN_ACTION);
export const apiEarnDeposit = createAction(WorkflowConstants.EARNDEPOSIT_ACTION);

export const signOut = createAction(WorkflowConstants.SIGNOUT_ACTION);