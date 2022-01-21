import React from "react";
import { MemoriesContextType, Memory } from "../types/memoriesType";

const MemoriesContext = React.createContext<MemoriesContextType>({
  memories: [],
  addMemory: () => {},
});

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const MemoriesContextProvider: React.FC<Props> = ({ children }) => {
  const [memories, setMemories] = React.useState<Memory[]>([]);

  const addMemory = (path: string, title: string, type: "good" | "bad") => {
    const newMemory: Memory = {
      id: Math.random().toString(),
      title,
      imagePath: path,
      type,
    };

    setMemories((precMemories) => [...precMemories, newMemory]);
  };

  const config = {
    memories,
    addMemory,
  };

  return (
    <MemoriesContext.Provider value={config}>
      {children}
    </MemoriesContext.Provider>
  );
};

export const useMemoriesContextProvider = () => {
  return React.useContext(MemoriesContext);
};
