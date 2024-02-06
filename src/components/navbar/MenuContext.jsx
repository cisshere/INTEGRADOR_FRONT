import { createContext, useReducer } from "react";

const Context = createContext();

const MenuDespegable = ({ children }) => {
  const initialState = {
    isMenuOpen: false,
    isCartOpen: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "toggle_menu":
        return {
          ...state,
          isMenuOpen: !state.isMenuOpen,
          isCartOpen: false,
        };
      case "toggle_cart":
        return {
          ...state,
          isCartOpen: !state.isCartOpen,
          isMenuOpen: false,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, MenuDespegable };
