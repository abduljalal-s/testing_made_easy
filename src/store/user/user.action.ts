import {
  Action,
  createAction,
  withMatcher,
  ActionWithPayload,
} from "../../utils/reducer.util";
import { UserData, AdditionalInformation } from "../../utils/firebase.utils";
import { USER_ACTION_TYPES } from "./user.types";
import { User } from "firebase/auth";

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;

export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;

export type EmailSignInStart = ActionWithPayload<
  USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  { email: string; password: string }
>;

export type SignInSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  UserData
>;

export type SignInFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_FAILED,
  Error
>;

export type SignUpStart = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_START,
  { email: string; password: string; displayName: string }
>;

export type SignUpSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  { user: User; additionalDetails: AdditionalInformation }
>;

export type SignUpFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_FAILED,
  Error
>;
export type SetBackToHome = ActionWithPayload<
  USER_ACTION_TYPES.SET_BACK_T0_HOME,
  boolean
>;
export type SetisLoading = ActionWithPayload<
  USER_ACTION_TYPES.SET_IS_LOADING,
  boolean
>;

export const checkUserSession = withMatcher((): CheckUserSession => {
  return createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);
});

export const googleSignInStart = withMatcher((): GoogleSignInStart => {
  return createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);
});

export const emailSignInStart = withMatcher(
  (email: string, password: string): EmailSignInStart => {
    return createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {
      email,
      password,
    });
  }
);

export const signInSuccess = withMatcher(
  (user: UserData & { id: string }): SignInSuccess => {
    return createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);
  }
);

export const signInFailed = withMatcher((error: Error): SignInFailed => {
  return createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);
});
export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string): SignUpStart => {
    return createAction(USER_ACTION_TYPES.SIGN_UP_START, {
      email,
      password,
      displayName,
    });
  }
);

export const signUpSuccess = withMatcher(
  (user: User, additionalDetails: AdditionalInformation): SignUpSuccess => {
    return createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {
      user,
      additionalDetails,
    });
  }
);
export const signUpFailed = withMatcher((error: Error): SignUpFailed => {
  return createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);
});

export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;

export const signOutStart = withMatcher((): SignOutStart => {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_START);
});

export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;
export const signOutSuccess = withMatcher((): SignOutSuccess => {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);
});

export type SignOutFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_OUT_FAILED,
  Error
>;
export const signOutFailed = withMatcher((error: Error): SignOutFailed => {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);
});

export type UserUid = ActionWithPayload<USER_ACTION_TYPES.USER_UID, string>;

export const userUid = withMatcher((value: string): UserUid => {
  return createAction(USER_ACTION_TYPES.USER_UID, value);
});

export const setBackToHome = withMatcher((value: boolean): SetBackToHome => {
  return createAction(USER_ACTION_TYPES.SET_BACK_T0_HOME, value);
});
export const setisLoading = withMatcher((value: boolean): SetisLoading => {
  return createAction(USER_ACTION_TYPES.SET_IS_LOADING, value);
});
