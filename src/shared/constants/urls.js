export const BASE_URL = 'https://scout.co.kr';

const urls = {
  EMPLOYMENT: `${BASE_URL}/employment?keyword=all`,
  ENTERPRISE: `https://scout.co.kr/company?keyword=all`, //Todo : url not working in mobile web
  HOME: BASE_URL,
  PROFILE: `${BASE_URL}/my/job_seeker`, //Todo: change the url
  USER: `${BASE_URL}/my/job_seeker`,
};

export default urls;
