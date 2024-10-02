import { useContext } from "react";
import { MyContext } from "../lib/ContextProvider";

const useContentProvider = () => {
  const context = useContext(MyContext);

  // Handle the case where context is undefined (i.e., if not wrapped in the provider)
  if (!context) {
    throw new Error("useContentProvider must be used within a ContextProvider");
  }

  return context;
};

export { useContentProvider };
