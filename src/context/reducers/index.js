import authReducer , { authInitialState } from './auth'

export const initialState = {
  authState: authInitialState
}

const mainReducer = ({ auth }, action) => ({
    authState: authReducer(auth, action)
})

export default mainReducer