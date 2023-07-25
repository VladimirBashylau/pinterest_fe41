export interface ICredentials {
    username: string;
    password: string;
    email: string;
  }
  
  export type Login = Omit<ICredentials, "username">;
  