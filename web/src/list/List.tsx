export type Artist = {
  name: String;
  id: String;
  icon: JSX.Element;
};
export interface List {
  state: {
    size: number;
    data: Artist[];
  };
  add(artist: Artist): void;
  remove(index: number): void;
  cancel(): void;
  save(): void;
}
export class List implements List {
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
  cancel() {
    this.state.size = 0;
    this.state.data = [];
  }

  save() {
    //send post to db
  }
}
