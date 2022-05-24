import { createAction, createReducer, on } from '@ngrx/store';

export const userReducer = createReducer(
  {
    maskUserName: false,
  },
  on(createAction('[User] Mask User Name'), (state) => {
    console.log('Original state: %s', JSON.stringify(state));

    return {
      ...state,
      maskUserName: !state.maskUserName,
    };
  })
);
