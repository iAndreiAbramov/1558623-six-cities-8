export enum ActionType {
  ChangeCity = 'changeCity',
  GetOffersData = 'getOffersData',
}

export type ChangeCityActionType = {
  type: ActionType.ChangeCity,
  payload: {
    name: string,
  },
};

export type GetOffersDataActionType = {
  type: ActionType.GetOffersData,
};

export type ActionTypes = ChangeCityActionType | GetOffersDataActionType;
