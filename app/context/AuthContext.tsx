import React from "react";

export interface IAuthContextData {
  signOut?: () => void;
  signIn?: (data: any) => void;
  signUp?: (data: any) => void;
}

export const AuthContext = React.createContext<Partial<IAuthContextData>>(
  {} as IAuthContextData
);
