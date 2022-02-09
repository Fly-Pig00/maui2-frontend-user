import { call, takeEvery } from 'redux-saga/effects';
import { WorkflowConstants } from '../constants/workflowConstants';
import request from '../../utils/fetch';

function* startAction(action) {
  yield call(request({
    type: WorkflowConstants.START_ACTION,
    method: 'POST',
    url: action.payload.url,
  }), action);
}

function* nextAction(action) {
  yield call(request({
    type: WorkflowConstants.NEXT_ACTION,
    method: 'PUT',
    url: action.payload.url,
  }), action);
}

function* backAction(action) {
  yield call(request({
    type: WorkflowConstants.BACK_ACTION,
    method: 'PUT',
    url: action.payload.url,
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
  yield takeEvery(WorkflowConstants.START_ACTION, startAction);
  yield takeEvery(WorkflowConstants.NEXT_ACTION, nextAction);
  yield takeEvery(WorkflowConstants.BACK_ACTION, backAction);
  yield takeEvery(WorkflowConstants.GET_IP_ADDRESS, getIPAddress);
}
