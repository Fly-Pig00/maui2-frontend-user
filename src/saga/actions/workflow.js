import { createAction } from 'redux-actions';
import { WorkflowConstants } from '../constants/workflowConstants';

export const getIPAddress = createAction(WorkflowConstants.GET_IP_ADDRESS);
export const apiSignIn = createAction(WorkflowConstants.SIGNIN_ACTION);
export const tokenSignIn = createAction(WorkflowConstants.TOKEN_SIGNIN_ACTION);
export const apiEarnDeposit = createAction(WorkflowConstants.EARNDEPOSIT_ACTION);
export const apiDepositSend = createAction(WorkflowConstants.DEPOSITSEND_ACTION);
export const apiHistoryRecord = createAction(WorkflowConstants.HISTORYRECORD_ACTION);
export const apiHistoryFetchAll = createAction(WorkflowConstants.HISTORYFETCHALL_ACTION);

export const signOut = createAction(WorkflowConstants.SIGNOUT_ACTION);
export const updateBalance = createAction(WorkflowConstants.UPDATEBALANCE_ACTION);
export const updateNetwork = createAction(WorkflowConstants.UPDATENETWORK_ACTION);