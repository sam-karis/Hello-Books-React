import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { login } from '../../actions/Login';
import * as types from '../../actions/constants';
import { LoginSuccessResponse, LoginFailResponse } from '../../mocks/ResponseMocks';
import { loginData } from '../../mocks/DataMocks';

// Mock redux store
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Test login action', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  /** Test login action */
  it('Test if it dispatches login success', done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(LoginSuccessResponse);
    });

    const expectedActions = [
      { type: types.AUTH_FETCHING },
      {
        data: {
          username: 'samkaris',
          email: 'sam@gmail.com',
          isAdmin: true,
          access_token: 'token......'
        },
        type: types.LOGIN_SUCCESS
      }
    ];
    const store = mockStore({ auth: {} });
    return store.dispatch(login(loginData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('Test if it dispatches login fail', done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(LoginFailResponse);
    });

    const expectedActions = [
      { type: types.AUTH_FETCHING },
      {
        data: {
          Message: 'Invalid email or password'
        },
        type: types.LOGIN_FAIL
      }
    ];
    const store = mockStore({ auth: {} });
    return store.dispatch(login(loginData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
