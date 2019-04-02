import { ListInterface } from "./ListInterface";
import { Artist } from "./Artist";
export class ArtistList implements ListInterface {
  state: {
    size: number;
    data: Artist[];
  };
  constructor() {
    this.state = {
      size: 0,
      data: []
    };
  }
  add(artist) {
    this.state.size++;
    this.state.data.push(artist);
  }
  remove(index) {
    this.state.size--;
    this.state.data.splice(index);
  }
  get(index) {
    return this.state.data[index];
  }
  cancel() {
    this.state.size = 0;
    this.state.data = [];
  }

  save() {
    //send post to db
  }
}
