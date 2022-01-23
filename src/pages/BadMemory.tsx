import React from "react";
import { useMemoriesContextProvider as contextProvider } from "../contextStore/memories-context";
import { MemoriesContent } from "components";

const BadMemory: React.FC = () => {
  const memoriesCtx = contextProvider();

  const badMemories = memoriesCtx.memories.filter(
    (memory) => memory.type === "bad"
  );
  return (
    <MemoriesContent
      title="Bad Memories"
      fallbackText="No Bad Memories Found."
      memories={badMemories}
    />
  );
};

export default BadMemory;
