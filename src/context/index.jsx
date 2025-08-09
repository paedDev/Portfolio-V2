import { createContext, useContext } from "react";


export const GlobalContext = createContext(null);
export default function GlobalState({ children }) {

  return <GlobalContext value={''}>
    {children}
  </GlobalContext>;
}