export interface IUser {
  _id: string;
  fullName: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserResponse {
  _id: string;
  fullName: string;
  email: string;
  createdAt: Date;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ISignupRequest {
  fullName: string;
  email: string;
  password: string;
}

export interface IAuthResponse {
  user: IUserResponse;
  token: string;
}

export interface IAuthError {
  message: string;
  field?: string;
} 