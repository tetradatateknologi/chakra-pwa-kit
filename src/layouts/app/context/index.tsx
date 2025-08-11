import { createContext, Dispatch, SetStateAction, useContext } from "react";

type AppContextType = {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  simpleMode: boolean;
  setSimpleMode: Dispatch<SetStateAction<boolean>>;
  colorActiveMode: boolean;
  setColorActiveMode: Dispatch<SetStateAction<boolean>>;
  center: boolean;
  setCenter: Dispatch<SetStateAction<boolean>>;
  hiddenScroll: boolean;
  setHiddenScroll: Dispatch<SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
