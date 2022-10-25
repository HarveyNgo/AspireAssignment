export interface CardInfo {
  Name: String;
  FirstNumber: String;
  LastNumber: String;
  CVV: String;
  ValidFrom: String;
}

export interface CardFunction {
  name: String;
  description: String;
  isShowToggle: Boolean;
  isToggle: Boolean;
  icon: any;
}

export interface SpendingLimitSuggestion {
  id: Number;
  number: Number;
}
