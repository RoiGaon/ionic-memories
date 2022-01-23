import React from "react";
import { Storage } from "@capacitor/storage";
import { Filesystem, Directory } from "@capacitor/filesystem";
import { base64FromPath } from "@ionic/react-hooks/filesystem";
import { MemoriesContextType, Memory, MemoryType } from "../types/memoriesType";
import { Photo } from "types/photoType";

const MemoriesContext = React.createContext<MemoriesContextType>({
  memories: [],
  addMemory: () => {},
  initContext: () => {},
});

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const MemoriesContextProvider: React.FC<Props> = ({ children }) => {
  const [memories, setMemories] = React.useState<Memory[]>([]);

  React.useEffect(() => {
    const storeableMemories = memories.map((memory) => ({
      id: memory.id,
      title: memory.title,
      imagePath: memory.imagePath,
      type: memory.type,
    }));
    Storage.set({ key: "memories", value: JSON.stringify(storeableMemories) });
  }, [memories]);

  const addMemory = async (photo: Photo, title: string, type: MemoryType) => {
    const fileName = new Date().getTime() + ".jpeg";
    const base64 = await base64FromPath(photo.preview);
    await Filesystem.writeFile({
      path: fileName,
      data: base64,
      directory: Directory.Data,
    });

    const newMemory: Memory = {
      id: Math.random().toString(),
      title,
      imagePath: fileName,
      type,
      base64Url: base64,
    };

    setMemories((precMemories) => [...precMemories, newMemory]);
  };

  const initContext = React.useCallback(async () => {
    const memoriesData = await Storage.get({ key: "memories" });
    const storedMemories = memoriesData.value
      ? JSON.parse(memoriesData.value)
      : [];
    const loadedMemories: Memory[] = [];
    for (const storedMemory of storedMemories) {
      const file = await Filesystem.readFile({
        path: storedMemory.imagePath,
        directory: Directory.Data,
      });

      loadedMemories.push({
        id: storedMemory.id,
        title: storedMemory.title,
        type: storedMemory.type,
        imagePath: storedMemory.imagePath,
        base64Url: "data:image/jpeg;base64," + file.data,
      });
    }
    setMemories(loadedMemories);
  }, []);

  const config = {
    memories,
    addMemory,
    initContext,
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
