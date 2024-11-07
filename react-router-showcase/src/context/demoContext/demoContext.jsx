import { createContext, useState } from "react";

export const DemoContext = createContext({
  demo: "Demo",
  setDemo: () => {},
});
// "Demo" represente la structure du contexte que je souhaite partager

export default function DemoContextProvider({ children }) {
  const [demo, setDemo] = useState("Demo");
  return (
    <DemoContext.Provider value={{ demo, setDemo }}>
      {children}
    </DemoContext.Provider>
  );
}
