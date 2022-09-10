import React from 'react';

const AppContext = React.createContext(
  {
    isAuthenticated: true,
    cart: {
      items: [],
      total:0
    },
    addItem: () => {},
    user: false,
    setUser: () => {}
  }
);

export default AppContext;