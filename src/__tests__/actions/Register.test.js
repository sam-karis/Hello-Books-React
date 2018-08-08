import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { register } from '../../actions/Register';
import * as types from '../../actions/constants';
import {
  RegisterSuccessResponse,
  RegisterFailExistingUser,
  RegisterFailInvalidEmail
} from '../../mocks/ResponseMocks';
import { signUpData } from '../../mocks/DataMocks';

// Mock redux store
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Test register action', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  /** Test register action */
  it('Test if it dispatches register success', done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(RegisterSuccessResponse);
    });

    const expectedActions = [
      { type: types.AUTH_FETCHING },
      {
        data: { Message: 'Successfully registered as a User' },
        type: types.REGISTER_SUCCESS
      }
    ];
    const store = mockStore({ auth: {} });
    return store.dispatch(register(signUpData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('Test if it dispatches register fail', done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(RegisterFailExistingUser);
    });

    const expectedActions = [
      { type: types.AUTH_FETCHING },
      {
        data: { Message: 'Email already registered to another user' },
        type: types.REGISTER_FAIL
      }
    ];
    const store = mockStore({ auth: {} });
    return store.dispatch(register(signUpData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('Test if it dispatches register fail due to invalid email', done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(RegisterFailInvalidEmail);
    });

    const expectedActions = [
      { type: types.AUTH_FETCHING },
      {
        data: { Message: 'Fill in a valid email to register' },
        type: types.REGISTER_FAIL
      }
    ];
    const store = mockStore({ auth: {} });
    return store.dispatch(register(signUpData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});

