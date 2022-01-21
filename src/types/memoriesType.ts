export interface Memory {
  id: string;
  imagePath: string;
  title: string;
  type: "good" | "bad";
}

export interface MemoriesContextType {
  memories: Memory[];
  addMemory: (path: string, title: string, type: "good" | "bad") => void;
}
