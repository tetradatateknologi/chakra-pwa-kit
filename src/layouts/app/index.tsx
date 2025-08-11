import MobileLayout from "@/layouts/mobile";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AppContext } from "./context";

export default function AppLayout() {
  const [title, setTitle] = useState<string>("");
  const [simpleMode, setSimpleMode] = useState<boolean>(false);
  const [colorActiveMode, setColorActiveMode] = useState<boolean>(false);
  const [hiddenScroll, setHiddenScroll] = useState<boolean>(false);
  const [center, setCenter] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        title,
        setTitle,
        simpleMode,
        setSimpleMode,
        colorActiveMode,
        setColorActiveMode,
        hiddenScroll,
        setHiddenScroll,
        center,
        setCenter,
      }}
    >
      <MobileLayout
        simpleMode={simpleMode}
        pageTitle={title}
        hiddenScroll={hiddenScroll}
        center={simpleMode ? false : true}
      >
        <Outlet />
      </MobileLayout>
    </AppContext.Provider>
  );
}
