import React from "react";
import { useMemoriesContextProvider as contextProvider } from "../contextStore/memories-context";
import { MemoriesContent } from "components";

const GoodMemory: React.FC = () => {
  const memoriesCtx = contextProvider();

  const goodMemories = memoriesCtx.memories.filter(
    (memory) => memory.type === "good"
  );
  return (
    <MemoriesContent
      title="Good Memories"
      fallbackText="No Good Memories Found."
      memories={goodMemories}
    />
  );
};

export default GoodMemory;
