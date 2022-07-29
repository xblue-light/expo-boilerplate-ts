interface IAuthState {
  isLoading: boolean;
  isSignout: boolean;
  userToken: string | null;
}

interface IActionType {
  type: string;
  token: string | null;
}

export default function authReducer(
  prevState: IAuthState,
  action: IActionType
): IAuthState {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case "SIGN_IN":
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token,
      };
    case "SIGN_OUT":
      return {
        ...prevState,
        isSignout: true,
        userToken: null,
      };
  }
}
