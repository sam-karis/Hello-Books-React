import { passwordReset, auth } from '../../reducers/AuthReducer';
import * as types from '../../actions/constants';

/** Test password reset reducer */
describe('Password reset reducers tests', () => {
  it('should return the initial state', () => {
    expect(passwordReset(undefined, {})).toEqual({
      error: null,
      email: localStorage.getItem('resetEmail'),
      token: localStorage.getItem('resetToken'),
      loading: false
    });
  });

  /** Test request reset success reducer */
  it('should handle REQUEST_RESET_SUCCESS reducers', () => {
    expect(
      passwordReset(
        {},
        {
          status: 200,
          data: {
            Message: 'A password reset link has been sent to your email.'
          },
          type: types.REQUEST_RESET_SUCCESS
        }
      )
    ).toEqual({
      Message: 'A password reset link has been sent to your email.',
      loading: false
    });

    /** Test request reset fail reducer */
    it('should handle REQUEST_RESET_FAIL reducer', () => {
      expect(
        passwordReset(
          {},
          {
            status: 400,
            data: {
              Message: 'No user registered with this email.'
            },
            type: types.REQUEST_RESET_SUCCESS
          }
        )
      ).toEqual({
        Message: 'No user registered with this email.',
        loading: false
      });
    });

    /** Test password reset success reducer */
    it('should handle RESET_PASSWORD_SUCCESS reducer', () => {
      expect(
        passwordReset(
          {},
          {
            status: 200,
            data: {
              Message: 'Reset successful.'
            },
            type: types.RESET_PASSWORD_SUCCESS
          }
        )
      ).toEqual({
        Message: 'Reset successful.',
        email: null,
        loading: false
      });
    });

    /** Test password reset fail reducer */
    it('should handle RESET_PASSWORD_FAil reducer', () => {
      expect(
        passwordReset(
          {},
          {
            status: 400,
            data: {
              Message: 'Link expired request a new link'
            },
            type: types.RESET_PASSWORD_FAIL
          }
        )
      ).toEqual({
        Message: 'Link expired request a new link',
        eerror: true,
        loading: false
      });
    });
  });
});

/** Test auth reducer */
describe('Auth reducers tests', () => {
  it('should return the initial state', () => {
    expect(auth(undefined, {})).toEqual({
      Message: '',
      loggedIn: JSON.parse(localStorage.getItem('loggedIn')),
      username: localStorage.getItem('username'),
      access_token: localStorage.getItem('access_token'),
      email: localStorage.getItem('email'),
      isAdmin: JSON.parse(localStorage.getItem('isAdmin')),
      error: null,
      loading: false
    });
  });
});
