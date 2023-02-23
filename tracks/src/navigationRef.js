import { NavigationActions } from 'react-navigation';

let navigator;

export const setNavigator = (nav) => {
  navigator = nav;
};

// Used for some places outside react component
export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
};
