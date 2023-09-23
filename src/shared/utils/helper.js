import { Alert } from 'react-native';

export const renderIf = (condition, component) => {
  if (condition) {
    return component;
  }
  return null;
};

export const customAlert = (title, message, callback = () => {}) => {
  setTimeout(() => {
    Alert.alert(title, message, [{ text: 'OK', onPress: callback }], {
      cancelable: false,
    });
  }, 0);
};

export const customAlertWithCancel = (title, message, callback = () => {}) => {
  setTimeout(() => {
    Alert.alert(
      title,
      message,
      [
        { text: strings('strings.yes'), onPress: callback },
        { text: strings('strings.cancel'), onPress: () => {} },
      ],
      { cancelable: true }
    );
  }, 100);
};
