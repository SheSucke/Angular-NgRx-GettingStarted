import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { User } from '../user';
import * as AppState from './../../state/app.state';
import * as UserActions from './user.actions';

export interface State extends AppState.State {
  users: UserState;
}

export interface UserState {
  maskUserName: boolean;
  currentUser: User;
}

const initatialState: UserState = {
  maskUserName: true,
  currentUser: null,
};

const getProductFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
  getProductFeatureState,
  (state) => state.maskUserName
);

export const getCurrentUser = createSelector(
  getProductFeatureState,
  (state) => state.currentUser
);

export const userReducer = createReducer(
  initatialState,
  on(UserActions.maskUserName, (state) => {
    return {
      ...state,
      maskUserName: !state.maskUserName,
    };
  })
);
