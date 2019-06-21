import { ListInterface } from "./ListInterface";
import { Artist } from "./Artist";
export class ArtistList implements ListInterface {
  state: {
    id: number | null;
    size: number;
    data: Artist[];
    title: string;
  };
  constructor() {
    this.state = {
      id: null,
      size: 0,
      data: [],
      title: ""
    };
  }
  add(artist: Artist) {
    this.state.size++;
    this.state.data.push(artist);
  }
  remove(index: number) {
    this.state.size--;
    this.state.data.splice(index, 1);
  }
  get() {
    return this.state.data;
  }
  getArtistIds() {
    const ArtistIds = new Array<string>(this.size());
    this.get().forEach(artist => ArtistIds.push(artist.id));

    return ArtistIds;
  }
  setTitle(title: string) {
    this.state.title = title;
  }
  setId(id: number) {
    this.state.id = id;
  }
  size() {
    return this.state.size;
  }
  getId() {
    return this.state.id;
  }
  getTitle() {
    return this.state.title;
  }
  view(index: number) {
    return this.state.data[index];
  }
  delete() {
    this.state.size = 0;
    this.state.data = [];
  }

  save() {
    //send post to db
  }
}
