import { createContext, useContext, useState } from "react";

const SomeContext = createContext({ value: 0, setValue: () => {} });

export const SomeProvider = ({ children }) => {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  };

  return (
    <SomeContext.Provider value={{ value, setValue, increment }}>
      {children}
    </SomeContext.Provider>
  );
};

export const useSomeContext = () => {
  const context = useContext(SomeContext);

  if (!context) {
    throw new Error("Some error");
  }

  return context;
};
