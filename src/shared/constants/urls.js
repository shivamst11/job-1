export const BASE_URL = 'https://rc.scout.co.kr';

const urls = {
  HOME: BASE_URL,
  EMPLOYMENT: `${BASE_URL}/employment?keyword=all`,
  ENTERPRISE: `${BASE_URL}/company?keyword=all`,
  PROFILE: `${BASE_URL}/company?keyword=all`,
  USER: `${BASE_URL}/login/user`,
};

export default urls;
