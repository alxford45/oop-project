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
  async getRelatedArtistsById(id: String) {
    return await this.get(`artists/${id}/related-artists`);
  }
}

export default ArtistAPI;
