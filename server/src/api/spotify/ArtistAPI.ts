import SpotifyAPI from "./SpotifyAPI";
import { RequestOptions } from "apollo-datasource-rest";

class ArtistAPI extends SpotifyAPI {
  constructor() {
    super();
  }
  willSendRequest(request: RequestOptions) {
    return super.willSendRequest(request);
  }

  getArtistById(id: string) {
    return this.get(`artists/${id}`);
  }
  getArtistsByIds(ids: string[]) {
    return this.get(`artists/?ids=${ids.join()}`);
  }
  getRelatedArtistsById(id: string) {
    return this.get(`artists/${id}/related-artists`);
  }
  getAlbumsById(id: string) {
    return this.get(`artists/${id}/albums`);
  }
}

export default ArtistAPI;
