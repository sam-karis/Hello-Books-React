const api_url=process.env.REACT_APP_api_url;
const request_header = (access_token) => {
  return {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer ' + access_token
  };
};

export {
  api_url,
  request_header
};