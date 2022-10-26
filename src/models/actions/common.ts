export interface IPayLoad {}

export interface ICallback {
  callbackSuccess?: (res?: any) => void;
  callbackFailed?: (res?: any) => void;
}

export interface Action<T extends IPayLoad> {
  type: string;
  payload: any;
  callback?: ICallback;
  error?: any;
}

export interface ActionError {
  type: string;
  payload?: {error?: any};
}
