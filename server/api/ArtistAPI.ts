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
    return this.get(`artists/${id}`);
  }
}

export default ArtistAPI;
