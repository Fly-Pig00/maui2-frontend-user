// @flow
/**
 * @module Reducers/Workflows
 * @desc Workflows Reducer
 */

import { handleActions } from "redux-actions";
import { WorkflowConstants } from "../constants/workflowConstants";
import { requestPending, requestSuccess, requestFail } from "../../utils/fetch";
// import { actionChannel } from 'redux-saga/effects';

const initialState = {
  totalBalances: {},
  availableBalances: {},
  walletAddress: "",
  paymentMethod: [],
  mauiAddress: null,
  terraAddress: null,
  isLogged: false,
  network: {
    chainID: "bombay-12",
    lcd: "https://bombay-lcd.terra.dev",
    mantle: "https://bombay-mantle.terra.dev",
    name: "testnet",
    walletconnectID: 0,
  },
  isUpdatingBalance: false,
};

export default handleActions(
  {
    [requestPending(WorkflowConstants.SIGNIN_ACTION)]: (state) => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [requestSuccess(WorkflowConstants.SIGNIN_ACTION)]: (state, action) => ({
      ...state,
      ...action.payload,
      totalBalances: action.payload?.wyreUser?.totalBalances,
      availableBalances: action.payload?.wyreUser?.availableBalances,
      walletAddress: action.payload.user?.ethWalletAddr,
      paymentMethod: action.payload.user?.payMethods,
      isLogged: true,
      isLoading: false,
      error: null,
    }),
    [requestFail(WorkflowConstants.SIGNIN_ACTION)]: (state, action) => ({
      ...state,
      isLogged: false,
      error: action.payload,
      isLoading: false,
    }),
    [requestSuccess(WorkflowConstants.TOKEN_SIGNIN_ACTION)]: (state) => ({
      ...state,
      isLogged: true,
      isLoading: false,
    }),
    [requestSuccess(WorkflowConstants.GET_PAYMENT_METHOD_ACTION)]: (state, action) => ({
      ...state,
      paymentMethod: state.paymentMethod.push(action.payload),
    }),
    [requestSuccess(WorkflowConstants.SIGNOUT_ACTION)]: (state) => ({
      ...state,
      balance: 0,
      isLogged: false,
    }),
    [requestSuccess(WorkflowConstants.UPDATEBALANCE_ACTION)]: (
      state,
      action
    ) => ({
      ...state,
      balance: action.payload,
    }),
    [requestSuccess(WorkflowConstants.UPDATENETWORK_ACTION)]: (
      state,
      action
    ) => ({
      ...state,
      network: action.payload,
    }),
    [requestFail(WorkflowConstants.UPDATENETWORK_ACTION)]: (state, action) => ({
      ...state,
      network: null,
    }),
    [`${WorkflowConstants.UPDATEBALANCE_ACTION}_DOING`]: (state) => ({
      ...state,
      isUpdatingBalance: true,
    }),
    [`${WorkflowConstants.UPDATEBALANCE_ACTION}_DONE`]: (state) => ({
      ...state,
      isUpdatingBalance: false,
    }),
  },
  initialState
);
