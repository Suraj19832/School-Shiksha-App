const APP_ENV = "test"; // dev, test , uat

export default {
  API_BASE_URL_V1: getAppBaseUrl(APP_ENV),
};

function getAppBaseUrl(app_env) {
  if (app_env == "dev") {
    return "https://dev.ehostingguru.com/school-shiksha/api/";
  } else if (app_env == "test") {
    return "https://test.ehostingguru.com/school-shiksha/api/";
  } else {
    return "https://uat.ehostingguru.com/school-shiksha/api/";
  }
}
