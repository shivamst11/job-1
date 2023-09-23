import axios from 'axios';
import urls from '../constants/urls';

export const saveNotification = async ({
  notificationToken,
  platform,
  userId,
}) => {
  const data = {
    notificationToken,
    platform,
    userId,
  };

  alert(JSON.stringify(data));
  try {
    const response = await axios.post(urls.SAVE_NOTIFICATION_TOKEN, data);
    console.log(response.data);
    alert('api response', JSON.stringify(response.data));
    return response;
  } catch (error) {
    // Handle error appropriately (e.g., log, throw, etc.)
    console.error('Error saving notification token:', error);
    throw error;
  }
};
