// Contains configurations for webservices
const constantUtils = {
  API_BASE_URL: "http://127.0.0.1:8000/",

  USER_SIGN_UP: {
    URL: `auth/users/`,
    METHOD: "POST",
    CONTENT_TYPE: "application/json",
  },
  USER_SIGN_IN: {
    URL: `auth/token/login`,
    METHOD: "POST",
    CONTENT_TYPE: "application/json",
  },
  LOG_OUT_API: {
    URL: `auth/token/logout`,
    METHOD: "POST",
    CONTENT_TYPE: "application/json",
  },
};

export default constantUtils;
