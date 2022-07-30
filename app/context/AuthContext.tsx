import { createContext } from "react";
import { IAuthData } from "../interfaces/IAuthData";

export interface IAuthContextData {
  signOut?: () => void;
  signIn?: (data: IAuthData) => void;
  signUp?: (data: IAuthData) => void;
}

export const AuthContext = createContext<Partial<IAuthContextData>>(
  {} as IAuthContextData
);
