export type Artist = {
  id: string;
  name: string;
  icon: string;
};
export const isArtist = (x: any): x is Artist => {
  if (x.name && x.id && x.icon) {
    return true;
  }
  return false;
};
