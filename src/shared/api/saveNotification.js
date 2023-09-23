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

  const response = await fetch(urls.SAVE_NOTIFICATION_TOKEN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response;
};
