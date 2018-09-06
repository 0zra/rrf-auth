import {
  DISABLE_BALANCE_ON_ADD,
  DISABLE_BALANCE_ON_EDIT,
  ALLOW_REGISTRATION
} from "../actions/types";

const initialState = {
  disablbeBalanceOnAdd: true,
  disablbeBalanceOnEdit: false,
  allowRegistration: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DISABLE_BALANCE_ON_ADD:
      return {
        ...state,
        disablbeBalanceOnAdd: !state.disablbeBalanceOnAdd
      };
    case DISABLE_BALANCE_ON_EDIT:
      return {
        ...state,
        disablbeBalanceOnEdit: !state.disablbeBalanceOnEdit
      };
    case ALLOW_REGISTRATION:
      return {
        ...state,
        allowRegistration: !state.allowRegistration
      };
    default:
      return state;
  }
}
