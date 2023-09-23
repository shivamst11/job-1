export const BASE_URL = 'https://rc.scout.co.kr';
export const DEV_URL = 'https://rcapi.scout.co.kr';

const urls = {
  EMPLOYMENT: `${BASE_URL}/employment?keyword=all`,
  ENTERPRISE: `https://scout.co.kr/company?keyword=all`, //Todo : url not working in mobile web
  HOME: BASE_URL,
  CORPORATE: `${BASE_URL}/my/job_seeker`,
  EPROFILE: `${BASE_URL}/my/company`,
  SCOUT: `${BASE_URL}/my/job_seeker`,
  SAVE_NOTIFICATION_TOKEN: `${DEV_URL}/user/notification/save`,
};
export default urls;
