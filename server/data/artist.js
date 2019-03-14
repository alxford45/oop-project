const { RESTDataSource } = require("apollo-datasource-rest");
class ArtistAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.spotify.com/v1/";
  }
  async getArtistById(id) {
    const response = await this.get(`artists/${id}`);
    return Array.isArray(response)
      ? response.map(artist => this.dataReducer(artist))
      : [];
  }
  dataReducer(artist) {
    return {
      id: artist
    };
  }
}

module.exports = DataAPI;
