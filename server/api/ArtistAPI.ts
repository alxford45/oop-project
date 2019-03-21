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
    const res = await this.get("artists", { id: id });
    return res;
  }
}

export default ArtistAPI;
