export interface CardInfo {
  Name: String;
  FirstNumber: String;
  LastNumber: String;
  CVV: String;
  ValidFrom: String;
}

export interface CardFunction {
  id: string;
  name: String;
  description: String;
  isShowToggle: boolean;
  isToggle: boolean;
  icon: any;
}

export interface SpendingLimitSuggestion {
  id: number;
  number: number;
}

export interface IInputValidation {
  spendLimitAmount: number;
}
