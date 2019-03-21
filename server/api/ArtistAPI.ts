import SpotifyAPI from "./SpotifyAPI";
import { RequestOptions } from "apollo-datasource-rest";

class ArtistAPI extends SpotifyAPI {
  constructor() {
    super();
  }
  willSendRequest(request: RequestOptions) {
    super.willSendRequest(request);
  }

  async getArtistById(id: string) {
    return await this.get(`artists/${id}`);
  }
  async getRelatedArtistsById(id: String) {
    return await this.get(`artists/${id}/related-artists`);
  }
}

export default ArtistAPI;
