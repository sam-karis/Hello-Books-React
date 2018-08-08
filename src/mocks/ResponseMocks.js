/**
 *  Register mock response
 */
const RegisterSuccessResponse = {
  status: 201,
  response: {
    Message: 'Successfully registered as a User'
  }
};

const RegisterFailExistingUser = {
  status: 409,
  response: {
    Message: 'Email already registered to another user'
  }
};

const RegisterFailInvalidEmail = {
  status: 406,
  response: {
    Message: 'Fill in a valid email to register'
  }
};

/**
 *  Login mock response
 */
const LoginSuccessResponse = {
  status: 200,
  response: {
    Message: 'Logged in successfully',
    username: 'samkaris',
    email: 'sam@gmail.com',
    is_admin: true,
    access_token: 'token......'
  }
};

const LoginFailResponse = {
  status: 401,
  response: {
    Message: 'Invalid email or password'
  }
};

/**
 *  Request password reset mock response
 */
const RequestPasswordSuccessResponse = {
  status: 200,
  response: {
    Message: 'A password reset link has been sent to your email.'
  }
};

const RequestPasswordFailResponse = {
  status: 400,
  response: {
    Message: 'No user registered with this email.'
  }
};

/**
 *  Password reset mock response
 */
const PasswordResetSuccessResponse = {
  status: 200,
  response: {
    Message: 'Reset successful.'
  }
};

const PasswordResetFailResponse = {
  status: 403,
  response: {
    Message: 'Invalid or expired token for the user.'
  }
};

export {
  RegisterSuccessResponse,
  RegisterFailExistingUser,
  RegisterFailInvalidEmail,
  LoginSuccessResponse,
  LoginFailResponse,
  RequestPasswordSuccessResponse,
  RequestPasswordFailResponse,
  PasswordResetSuccessResponse,
  PasswordResetFailResponse
};
