import { createContext, useContext } from "react";
import type { User } from "../App";

interface DashboardContextProps {
  user: User | null;
  setUser: (user: User) => void;
}
export const DashboardContext = createContext <DashboardContextProps | undefined> (undefined)


export function useUserContext() {
  const value = useContext(DashboardContext)

  if (value === undefined || value.user === null) {
    throw new Error("useUserContext must be used within a DashboardContext.Provider")
  }
  return value
}