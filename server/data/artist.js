const { RESTDataSource } = require("apollo-datasource-rest");

class ArtistAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.spotify.com/v1/";
    this.token =
      "Bearer BQCNKOLRvCIXXu9VqG7LU8vXzpmqzVwI4I74fUGoY9sXQvXC8ctZeHFgkBe8RvCxE91luTeU_FzrMqPa6AuE7KzKGO5Gl4IDUov1ODdIYIhhuvuEmH-oiX5uxC-NY82rmxZv8H0WJOs";
  }
  willSendRequest(request) {
    request.headers.set("Authorization", this.token);
  }
  async getArtistById(id) {
    const res = await this.get(`artists/0TnOYISbd1XYRBk9myaseg`);
    return res;
  }
}

module.exports = ArtistAPI;
