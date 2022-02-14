import { call, takeEvery } from 'redux-saga/effects';
import { WorkflowConstants } from '../constants/workflowConstants';
import request from '../../utils/fetch';

function* signIn(action) {
  yield call(request({
    type: WorkflowConstants.SIGNIN_ACTION,
    method: 'POST',
    url: action.payload.url,
  }), action);
}

function* signOut(action) {
  yield call(request({
    type: WorkflowConstants.SIGNOUT_ACTION,
    method: 'POST',
    url: '',
  }), action);
}

function* getIPAddress(action) {
  yield call(request({
    type: WorkflowConstants.GET_IP_ADDRESS,
    method: 'GET',
    apiUrl: 'https://api.ipify.org?format=json&callback=?',
  }), action);
}


export default function* workflowSaga() {
  yield takeEvery(WorkflowConstants.GET_IP_ADDRESS, getIPAddress);
  yield takeEvery(WorkflowConstants.SIGNIN_ACTION, signIn);
  yield takeEvery(WorkflowConstants.SIGNOUT_ACTION, signOut);
}
