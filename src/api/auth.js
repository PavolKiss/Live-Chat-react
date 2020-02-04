import * as firebase from '../firebase';

export const signin = async (email = null, password = null) => {
  try {
    const response = await firebase.auth.signInWithEmailAndPassword(
      email,
      password
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const signUp = async (
  email = null,
  password = null,
  userName = null
) => {
  try {
    const response = await firebase.auth.createUserWithEmailAndPassword(
      email,
      password
    );
    const { user } = response;
    await user.updateProfile({
      displayName: userName,
      photoURL:
        'https://firebasestorage.googleapis.com/v0/b/livechat-12a55.appspot.com/o/userAvatar%2Fdefault.png?alt=media&token=266c04d2-273f-4173-975e-f940fd7cec0a'
    });
    return response;
  } catch (error) {
    throw error;
  }
};
