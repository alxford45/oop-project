import { Artist } from "./Artist";

export interface ListInterface {
  state: {
    id: number | null;
    size: number;
    data: Artist[];
    title: string;
  };
  add(artist: Artist): void;
  remove(index: number): void;
  delete(): void;
  save(): void;
}
