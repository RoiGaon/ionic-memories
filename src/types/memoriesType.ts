import { Photo } from "./photoType";

export interface Memory {
  id: string;
  imagePath: string;
  title: string;
  type: MemoryType;
  base64Url: string;
}

export interface MemoriesContextType {
  memories: Memory[];
  addMemory: (photo: Photo, title: string, type: MemoryType) => void;
  initContext: () => void;
}

export type MemoryType = "good" | "bad";
