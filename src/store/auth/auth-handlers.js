import { requestAuthLogin, requestAuthRegister } from './auth-requests';
import { call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { saveToken } from '../../utils/auth';
export default function* handleAuthRegister(action) {
  const { payload } = action;
  try {
    const response = yield call(requestAuthRegister, payload);
    if (response.status === 201) {
      toast.success('Created new account successfully');
    }
  } catch (err) {
    console.log(err);
  }
}
function* handleAuthLogin({ payload }) {
  try {
    const response = yield call(requestAuthLogin, payload);
    if (response.data.accessToken && response.data.refreshToken) {
      saveToken(response.data.accessToken, response.data.refreshToken);
    }
    yield 1;
  } catch (err) {
    console.log(err);
  }
}
export { handleAuthLogin };
