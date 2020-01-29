import * as firebase from 'firebase/app';

export const admin_actions = async (NAME = null, USER_CREDENTIALS = null) => {
  try {
    const adminFunc = firebase.functions().httpsCallable(NAME);
    const response = await adminFunc(USER_CREDENTIALS);
    return response;
  } catch (error) {
    throw error;
  }
};
