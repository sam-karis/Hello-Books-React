/**
 * Register mock data
 */
const signUpData = {
  name: 'sam Karis',
  username: 'samkaris',
  email: 'sam@gmail.com',
  password: 'my_pass',
  confirm_password: 'my_pass'
};

/**
 * Login mock data
 */
const loginData = {
  email: 'sam@gmail.com',
  password: 'my_pass'
};

/**
 * Password reset mock data
 */
const requestPasswordData = {
  email: 'sam@gmail.com'
};

const passwordResetData = {
  email: 'sam@gmail.com',
  new_password: 'my_pass',
  confirm_new_password: 'my_pass',
  token: 'ydqwye1e211n1e8dh2'
};


export {
  signUpData,
  loginData,
  requestPasswordData,
  passwordResetData
};
