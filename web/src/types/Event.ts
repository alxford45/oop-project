export type Event = {
  displayName: String;
  id: string;
  uri: string;
  start: string;
  location: object;
  type: string;
  venue: Object;
  performance: Object[];
};
export const isEvent = (x: any): x is Event => {
  if (x.name && x.id && x.type) {
    return true;
  }
  return false;
};
