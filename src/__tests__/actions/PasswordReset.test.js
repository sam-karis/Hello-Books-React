import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { requestReset} from '../../actions/ResetPassword';
import * as types from '../../actions/constants';
import {
  RequestPasswordSuccessResponse,
  RequestPasswordFailResponse
} from '../../mocks/ResponseMocks';
import { requestPasswordData } from '../../mocks/DataMocks';

// Mock redux store
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

/** Test request password reset action */
describe('Test request password reset action', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('Test if it dispatches request password reset success', done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(RequestPasswordSuccessResponse);
    });

    const expectedActions = [
      { type: types.PASSWORD_FETCHING },
      {
        data: {
          Message: 'A password reset link has been sent to your email.'
        },
        type: types.REQUEST_RESET_SUCCESS
      }
    ];
    const store = mockStore({ passwordReset: {} });
    return store.dispatch(requestReset(requestPasswordData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('Test if it dispatches request password reset fail', done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(RequestPasswordFailResponse);
    });

    const expectedActions = [
      { type: types.PASSWORD_FETCHING },
      {
        data: {
          Message: 'No user registered with this email.'
        },
        type: types.REQUEST_RESET_FAIL
      }
    ];
    const store = mockStore({ passwordReset: {} });
    return store.dispatch(requestReset(requestPasswordData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
