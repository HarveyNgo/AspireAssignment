import {Action, IPayLoad} from '@models/actions/common';
import HomeTypes from './home.types';

const initialState = {
  users: [
    {
      profile: {
        password: '...',
        addresses: [
          {
            city: 'Tokyo',
            country: 'Japan',
          },
          {
            city: 'Washington',
            country: 'America',
          },
          // other items ...
        ],
      },
    },
    // other items ...
  ],
  // other keys ...
};

export default (state = initialState, action: Action<IPayLoad>) => {
  switch (action.type) {
    case HomeTypes.HOME_TEST: {
      // let _users = deepclone(state.users);
      console.log('hung HomeTypes.HOME_TEST 1 state.users:', state.users);
      state.users.map(user => {
        user.profile.addresses.map(address => {
          if (address.city === 'Washington') {
            address.city = 'New York1';
          }
        });
      });
      console.log('hung HomeTypes.HOME_TEST 2 state.users:', state.users);

      return {
        // state,
        // users: _users,
      };
    }

    default:
      return state;
  }
};
