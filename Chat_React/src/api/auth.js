import * as firebase from "../firebase";

export const signin = async (email, password) => {
  try {
    const response = await firebase.auth.signInWithEmailAndPassword(
      email,
      password
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const signUp = async (email, password, userName) => {
  try {
    const response = await firebase.auth.createUserWithEmailAndPassword(
      email,
      password
    );
    const { user } = response;
    await user.updateProfile({
      displayName: userName
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
