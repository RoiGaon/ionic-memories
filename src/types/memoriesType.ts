export interface Memory {
  id: string;
  imagePath: string;
  title: string;
  type: "good" | "bad";
  base64Url: string;
}

export interface MemoriesContextType {
  memories: Memory[];
  addMemory: (
    path: string,
    base64: string,
    title: string,
    type: "good" | "bad"
  ) => void;
  initContext: () => void;
}
